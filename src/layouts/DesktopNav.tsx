import s from "../assets/styles/layouts/desktopNav.module.css";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesktopNav() {
  const { t } = useTranslation();
  return (
    <nav className={s.navigation}>
      <Link to="/" aria-label="Go home">
        <NetneoIcon />
      </Link>

      <ul className={s.list}>
        <li>
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

      <Link to="/" className={s.logoText} aria-label="Go home">
        <TextIcon />
      </Link>
    </nav>
  );
}
