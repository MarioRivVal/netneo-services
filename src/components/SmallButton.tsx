import s from "../assets/styles/components/smallButton.module.css";
import type { SmallButtonProps } from "../types/components";

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
