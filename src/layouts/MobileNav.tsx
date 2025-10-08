import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "../assets/styles/layouts/mobileNav.module.css";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import { useTranslation } from "react-i18next";

export default function MobileNav() {
  const [isNavActive, setIsNavActive] = useState(false);
  const { t } = useTranslation("generals");

  const handleCheckboxChange = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div className={`${s.navigation} ${isNavActive ? s.active : ""}`}>
        <div className={s.logos}>
          <Link to="/" aria-label="Go home" className={s.logoNetneo}>
            <NetneoIcon />
          </Link>
          <Link to="/" className={s.logoText} aria-label="Go home">
            <TextIcon />
          </Link>
        </div>
        <div>
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
              {/* <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${s.item} ${isActive ? s.active : ""}`
                  }
                >
                  {t("nav.contact")}
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
