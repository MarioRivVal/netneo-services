import { Link } from "react-router-dom";
import s from "../assets/styles/components/gradientButton.module.css";
import ArrowIcon from "../icons/ArrowIcon";
import type { GradientButtonProps } from "../types/components";

const isExternalHttp = (url: string) => /^https?:\/\//i.test(url);
const isFile = (url: string) =>
  /\.(pdf|jpg|jpeg|png|webp|avif|zip|docx?|xlsx?)$/i.test(url);

export default function GradientButton({
  text,
  to,
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
  variant = "light",
  className = "",
}: GradientButtonProps) {
  const cls = `${s.button} ${
    variant === "dark" ? s.dark : s.light
  } ${className}`;

  const content = (
    <>
      {text}
      <div className={s.iconWrapper}>
        <div className={`${s.icons} u--flex-row`}>
          <ArrowIcon />
          <ArrowIcon />
          <ArrowIcon />
        </div>
      </div>
    </>
  );

  if (to) {
    // Si es http(s) o un archivo (como .pdf) => usar <a>
    if (isExternalHttp(to) || isFile(to)) {
      return (
        <a href={to} target={target} rel={rel} className={cls}>
          {content}
        </a>
      );
    }
    // Si empieza por "/" y NO es archivo, lo tratamos como ruta interna
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
