import s from "../assets/styles/components/smallButton.module.css";
import type { ReactNode } from "react";

type SmallButtonProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  title?: string;
  Icon?: ReactNode;
};

export default function SmallButton({
  text,
  onClick,
  active = false,
  className,
  title,
  Icon,
}: SmallButtonProps) {
  return (
    <button
      type="button"
      className={`${s.smallBtn} ${active ? s.active : ""} ${className ?? ""}`}
      onClick={onClick}
      title={title}
    >
      {text}
      {Icon && <div className={s.iconBox}>{Icon}</div>}
    </button>
  );
}
