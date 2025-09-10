import s from "../assets/styles/layouts/desktopNav.module.css";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

export default function DesktopNav() {
  // const { t } = useTranslation("nav");
  return (
    <nav className={s.navigation}>
      <Link to="/" aria-label="Go home">
        <NetneoIcon />
      </Link>

      {/* <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${s.item} ${isActive ? s.active : ""}`
            }
          >
            {t("home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${s.item} ${isActive ? s.active : ""}`
            }
          >
            {t("services")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${s.item} ${isActive ? s.active : ""}`
            }
          >
            {t("projects")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${s.item} ${isActive ? s.active : ""}`
            }
          >
            {t("about")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${s.item} ${isActive ? s.active : ""}`
            }
          >
            {t("contact")}
          </NavLink>
        </li>
      </ul> */}

      <Link to="/" className={s.logoText} aria-label="Go home">
        <TextIcon />
      </Link>
    </nav>
  );
}
