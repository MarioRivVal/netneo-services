import s from "../assets/styles/components/sliderImgBox.module.css";
import ResponsiveImage from "./ResponsiveImage";
import type { SliderImgBoxProps } from "../types/components";

export default function SliderImgBox({
  sliderRef,
  itemRef,
  items,
}: SliderImgBoxProps) {
  return (
    <div className="slider" ref={sliderRef}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          ref={(el) => {
            itemRef.current[idx] = el;
          }}
          className="item"
        >
          <ResponsiveImage
            name={item.name!}
            alt={item.alt!}
            className={s.card}
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}
