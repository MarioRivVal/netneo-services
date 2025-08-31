import type { ReactNode } from "react";
import s from "../assets/styles/layouts/contentBox.module.css";
import SliderBtns from "../components/SliderBtns";

type ContentBoxProps = {
  childrenAside?: ReactNode;
  childrenList?: ReactNode;
  count?: number;
  active?: number;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function ContentBox({
  childrenAside,
  childrenList,
  count = 0,
  active = 0,
  onPrev,
  onNext,
}: ContentBoxProps) {
  return (
    <div className={s.box}>
      <div className={s.aside}>{childrenAside}</div>
      <div className={s.list}>{childrenList}</div>
      <div className={s.btnsBox}>
        <SliderBtns
          count={count}
          active={active}
          onNext={onNext!}
          onPrev={onPrev!}
        />
      </div>
    </div>
  );
}
