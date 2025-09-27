import s from "../assets/styles/components/sliderTextBox.module.css";
import useGalleryCards from "../hooks/components/useGalleryCards";
import { reasonsIcons } from "../content/icons";
import type { SliderTextBoxProps } from "../types/components";

export default function SliderTextBox({
  directory,
  scope,
  initialIndex,
}: SliderTextBoxProps) {
  const refs = useGalleryCards(directory, scope, initialIndex);

  return (
    <div className={`${s.box} u--mw-centered u--flex-column`}>
      <div
        className={`${s.slider} ${s[`${scope}Slider`]}`}
        ref={refs.sliderRef}
      >
        {refs.itemsList.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              refs.itemRef.current[index] = el;
            }}
            className={s.item}
          >
            <div
              className={`${s.content} ${
                refs.itemActive === index ? s.active : ""
              }`}
            >
              <div className={`${s.titles} u--flex-column`}>
                <div className={s.icon}>
                  {refs.itemActive === index
                    ? reasonsIcons[index].active
                    : reasonsIcons[index].unactive}
                </div>
                <p className={s.subtitle}>{item.subTitle}</p>
                <p className={s.title}>{item.title}</p>
              </div>

              <p className={s.paragraph}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
