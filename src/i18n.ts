// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        about: "About me",
        contact: "Contact",
      },
      home: { title: "Welcome to Netneo" },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Home",
        services: "Servicios",
        projects: "Proyectos",
        about: "Quién somos",
        contact: "Contacto",
      },
      home: { title: "Bienvenido a Netneo" },
    },
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        services: "Servizi",
        projects: "Progetti",
        about: "Chi siamo",
        contact: "Contatti",
      },
      home: { title: "Benvenuto su Netneo" },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
        "cookie",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"], // guarda la elección del usuario
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
