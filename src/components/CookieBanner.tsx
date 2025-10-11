// src/components/CookieBanner.tsx
import s from "../assets/styles/components/cookieBanner.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadGA, enableAnalytics, disableAnalytics } from "../lib/ga";
import SmallButton from "./SmallButton";

const MEASUREMENT_ID = "G-MKDQ6DCR4J"; // tu GA4
const STORAGE_KEY = "cookie-consent-v1";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "accepted") {
      // Si ya aceptó en otra sesión, carga GA y activa
      loadGA(MEASUREMENT_ID).then(() => enableAnalytics(MEASUREMENT_ID));
      setOpen(false);
    } else if (saved === "rejected") {
      disableAnalytics();
      setOpen(false);
    } else {
      setOpen(true);
    }

    const handler = () => setOpen(true);
    window.addEventListener("open-cookie-banner", handler);
    return () => window.removeEventListener("open-cookie-banner", handler);
  }, []);

  const accept = async () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    await loadGA(MEASUREMENT_ID);
    enableAnalytics(MEASUREMENT_ID);
    setOpen(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    disableAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={s.wrapper} role="dialog" aria-live="polite">
      <div className={`${s.box} u--flex-column`}>
        <h3>Tu privacidad</h3>
        <p className="u--paragraph">
          Usamos cookies <strong>analíticas</strong> (Google Analytics 4) para
          mejorar el sitio. Son opcionales. Puedes aceptar o rechazar ahora, y
          cambiar tu elección cuando quieras desde “Cambiar preferencias”.
        </p>
        <div className={`${s.actions} u--flex-column`}>
          <NavLink to="/cookies" className={`${s.link} u--paragraph`}>
            Más información
          </NavLink>
          <SmallButton text="Rechazar" onClick={reject} active />
          <SmallButton text="Aceptar" onClick={accept} active />
        </div>
      </div>
    </div>
  );
}
