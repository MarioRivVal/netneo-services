import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import s from "../assets/styles/layouts/mobileNav.module.css";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import { useTranslation } from "react-i18next";

export default function MobileNav() {
  const [isNavActive, setIsNavActive] = useState(false);

  const { i18n } = useTranslation();
  const langs = ["en", "es", "it"];

  const { t } = useTranslation();

  const handleCheckboxChange = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 8 }}>
        {langs.map((lng) => (
          <button
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.language === lng}
            title={`Change language to ${lng.toUpperCase()}`}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={`${s.navigation} ${isNavActive ? s.active : ""}`}>
        <div>
          <Link to="/" aria-label="Go home" className={s.logoNetneo}>
            <NetneoIcon />
          </Link>
          <Link to="/" className={s.logoText} aria-label="Go home">
            <TextIcon />
          </Link>
        </div>
        <div className={s.menu}>
          <div
            className={s.button}
            role="button"
            aria-label="Button for open de navigation"
            onClick={handleCheckboxChange}
          >
            <span className={s.icon}>&nbsp;</span>
          </div>
          <div className={s.background}>&nbsp;</div>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li onClick={handleCheckboxChange}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.services")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.projects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.contact")}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
