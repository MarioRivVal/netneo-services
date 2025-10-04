import type { CSSProperties } from "react";
import s from "../assets/styles/components/sliderImgBox.module.css";
import ResponsiveImage from "./ResponsiveImage";
import type { SliderImgBoxProps } from "../types/components";

export default function SliderImgBox({
  sliderRef,
  itemRef,
  items,
  stats,
  activeIndex,
}: SliderImgBoxProps) {
  return (
    <div className="slider" ref={sliderRef}>
      {items.map((item, idx) => {
        const isActive = stats && activeIndex === idx;
        return (
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
            {isActive && (
              <div className={`${s.statsBox} ${isActive ? s.isActive : ""}`}>
                <div className={s.dots} aria-hidden="true" role="presentation">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={s.dot}
                      style={{ "--i": i } as CSSProperties}
                    />
                  ))}
                </div>
                <span className={s.statsNumber}>{item.statsNumber}</span>
                <span className={s.statsLabel}>{item.statsLabel}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
