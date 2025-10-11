// src/lib/ga.ts

// ---- Tipos auxiliares
type ConsentValue = "granted" | "denied";
type ConsentParams = {
  ad_storage?: ConsentValue;
  analytics_storage?: ConsentValue;
  ad_user_data?: ConsentValue;
  ad_personalization?: ConsentValue;
  functionality_storage?: ConsentValue;
  security_storage?: ConsentValue;
};

type ConfigParams = {
  anonymize_ip?: boolean;
  allow_google_signals?: boolean;
  allow_ad_personalization_signals?: boolean;
  // Permite futuras claves de GA sin romper tipos
  [key: string]: unknown;
};

type EventParams = {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  [key: string]: unknown;
};

// Firma de gtag con sobrecargas
type Gtag = ((command: "js", date: Date) => void) &
  ((command: "config", targetId: string, config?: ConfigParams) => void) &
  ((command: "event", eventName: string, params?: EventParams) => void) &
  ((
    command: "consent",
    action: "default" | "update",
    params: ConsentParams
  ) => void);

declare global {
  interface Window {
    // dataLayer es un array de "eventos" (cada evento es un array de args)
    dataLayer: unknown[][];
    gtag: Gtag;
    _gaLoaded?: boolean;
  }
}

export function loadGA(measurementId: string): Promise<void> {
  return new Promise((resolve) => {
    if (window._gaLoaded) return resolve();

    window.dataLayer = window.dataLayer || [];

    // ---- Definimos gtag con overloads + implementación
    function gtag(command: "js", date: Date): void;
    function gtag(
      command: "config",
      targetId: string,
      config?: ConfigParams
    ): void;
    function gtag(
      command: "event",
      eventName: string,
      params?: EventParams
    ): void;
    function gtag(
      command: "consent",
      action: "default" | "update",
      params: ConsentParams
    ): void;
    function gtag(...args: unknown[]): void {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Consentimiento por defecto (sin medir aún)
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    s.onload = () => {
      window.gtag("js", new Date());
      window._gaLoaded = true;
      resolve();
    };
    document.head.appendChild(s);
  });
}

export function enableAnalytics(measurementId: string) {
  if (!window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

export function disableAnalytics() {
  if (!window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "denied" });
}

export function trackPageView() {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: location.href,
    page_path: location.pathname,
  });
}
