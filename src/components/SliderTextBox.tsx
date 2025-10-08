import s from "../assets/styles/components/sliderTextBox.module.css";
import useGalleryCards from "../hooks/components/useGalleryCards";
import { reasonsIcons, testimonialIcons } from "../content/icons";
import type { SliderTextBoxProps } from "../types/components";
import type { ReactNode } from "react";

export default function SliderTextBox({
  directory,
  scope,
  initialIndex,
}: SliderTextBoxProps) {
  const refs = useGalleryCards({ directory, scope, initialIndex });

  const icons: { active: ReactNode; unactive: ReactNode }[] | null =
    scope === "reasons"
      ? reasonsIcons
      : scope === "testimonials"
      ? testimonialIcons
      : null;

  const isFaqs = scope === "faqs";

  return (
    <div className={`${s.box} u--mw-centered u--flex-column`}>
      <div className={`slider ${s[`${scope}Slider`]}`} ref={refs.sliderRef}>
        {refs.itemsList.map((item, index) => {
          const active = refs.itemActive === index;

          return (
            <div
              key={index}
              ref={(el) => {
                refs.itemRef.current[index] = el;
              }}
              className="item"
            >
              <div
                className={`u--flex-column ${s.content} ${
                  active ? s.active : ""
                }`}
              >
                <div className={`${s.titles} u--flex-column`}>
                  {/* ICONO o NÚMERO */}
                  <div className={s.icon}>
                    {isFaqs ? (
                      <span
                        className={`${s.number} ${
                          active ? s.numberActive : ""
                        }`}
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    ) : (
                      icons &&
                      (active ? icons[index].active : icons[index].unactive)
                    )}
                  </div>

                  <p className={s.subtitle}>{item.subTitle}</p>
                  <p className={s.title}>{item.title}</p>
                </div>

                <p className={s.paragraph}>{item.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
