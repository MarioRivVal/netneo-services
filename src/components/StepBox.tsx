import s from "../assets/styles/components/stepBox.module.css";
import ResponsiveImage from "./ResponsiveImage";
import type { StepBoxProps } from "../types/components";

export default function StepBox({ item, reverse }: StepBoxProps) {
  return (
    <div className={`${s.step} ${reverse ? s.reverse : ""} u--flex-column`}>
      <ResponsiveImage
        name={item.imgName}
        alt={item.imgAlt}
        className={s.stepImg}
      />
      <div className={s.stepText}>
        <h4>{item.title}</h4>
        <p className={`${s.paragraph} u--paragraph`}>{item.paragraph}</p>
      </div>
    </div>
  );
}
