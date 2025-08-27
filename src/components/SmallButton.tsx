import s from "../assets/styles/components/smallButton.module.css";

type SmallButtonProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  title?: string;
};

export default function SmallButton({
  text,
  onClick,
  active = false,
  className,
  title,
}: SmallButtonProps) {
  return (
    <button
      type="button"
      className={`${s.smallBtn} ${active ? s.active : ""} ${className ?? ""}`}
      onClick={onClick}
      title={title}
    >
      {text}
    </button>
  );
}
