import { Link } from "react-router-dom";
import s from "../assets/styles/components/gradientButton.module.css";
import ArrowIcon from "../icons/ArrowIcon";

type BaseProps = {
  variant: "dark" | "light";
  download?: string | boolean;
  target?: "_blank" | "_self";
  rel?: string;
  text: string;
  className?: string;
  children?: never;
};

type ButtonProps = BaseProps & {
  onClick: () => void;
  to?: never;
  href?: never;
};

type LinkProps = BaseProps & {
  to: string; // ruta interna
  onClick?: never;
  href?: never;
};

type AnchorProps = BaseProps & {
  href: string; // url externa
  onClick?: never;
  to?: never;
};

type GradientButtonProps = ButtonProps | LinkProps | AnchorProps;

export default function GradientButton(props: GradientButtonProps) {
  const { variant, text } = props;
  const cls = `${s.button} ${variant === "dark" ? s.dark : s.light} ${
    props.className ?? ""
  }`;

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

  if ("to" in props && typeof props.to === "string") {
    // React Router internal link
    return (
      <Link to={props.to} className={cls}>
        {content}
      </Link>
    );
  }

  if ("href" in props) {
    // External link
    const anchorProps = props as AnchorProps;
    return (
      <a
        href={anchorProps.href}
        download={anchorProps.download} // 👈 aquí
        target={anchorProps.target ?? "_blank"}
        rel={anchorProps.rel ?? "noopener noreferrer"}
        className={cls}
      >
        {content}
      </a>
    );
  }

  // Default: button with onClick
  return (
    <button onClick={props.onClick} className={cls}>
      {content}
    </button>
  );
}
