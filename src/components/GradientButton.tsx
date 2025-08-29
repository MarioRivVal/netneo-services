// components/GradientButton.tsx

import s from "../assets/styles/components/gradientButton.module.css";
import ArrowIcon from "../icons/ArrowIcon";

type GradientButtonProps = {
  variant: "dark" | "light";
  text: string;
  onClick?: () => void;
};

export default function GradientButton({
  variant,
  text,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      className={`${s.button} ${variant === "dark" ? s.dark : s.light}`}
      onClick={onClick}
    >
      {text}
      <div className={s.iconWrapper}>
        <div className={`${s.icons} u--flex-row`}>
          <ArrowIcon />
          <ArrowIcon />
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
}
