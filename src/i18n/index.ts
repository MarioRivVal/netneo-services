// src/i18n/index.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import type { Resource, ResourceLanguage } from "i18next";

// ✅ Tipamos el resultado del glob: cada módulo es { default: ResourceLanguage }
const modules = import.meta.glob<{ default: ResourceLanguage }>(
  "./locales/*/*.json",
  { eager: true }
);

// ✅ 'resources' con el tipo oficial de i18next (sin 'any' nuestros)
const resources: Resource = {};

for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
  if (!match) continue;
  const [, lng, ns] = match;

  // 'mod.default' ya es ResourceLanguage gracias al genérico
  (resources[lng] ||= {} as ResourceLanguage)[ns] = mod.default;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "cookie"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
