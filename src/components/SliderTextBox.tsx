import s from "../assets/styles/components/sliderTextBox.module.css";
import useGalleryCards from "../hooks/components/useGalleryCards";
import { reasonsIcons, testimonialIcons } from "../content/icons";
import type { SliderTextBoxProps } from "../types/components";

export default function SliderTextBox({
  directory,
  scope,
  initialIndex,
}: SliderTextBoxProps) {
  const refs = useGalleryCards(directory, scope, initialIndex);

  const icons = scope === "reasons" ? reasonsIcons : testimonialIcons;

  return (
    <div className={`${s.box} u--mw-centered u--flex-column`}>
      <div className={`slider ${s[`${scope}Slider`]}`} ref={refs.sliderRef}>
        {refs.itemsList.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              refs.itemRef.current[index] = el;
            }}
            className="item"
          >
            <div
              className={`${s.content} ${
                refs.itemActive === index ? s.active : ""
              }`}
            >
              <div className={`${s.titles} u--flex-column`}>
                <div className={s.icon}>
                  {refs.itemActive === index
                    ? icons[index].active
                    : icons[index].unactive}
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
