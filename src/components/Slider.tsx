// components/Slider.tsx
import s from "../assets/styles/components/slider.module.css";
import useCarousel from "../hooks/useCarousel";
import { homeServicesImgs } from "../content/images";
import { useTranslation } from "react-i18next";
import ResponsiveImage from "./ResponsiveImage";

type GalleryItem = { id: string | number; name: string; alt: string };

type SliderProps = {
  onActiveChange?: (index: number) => void;
};

export default function Slider({ onActiveChange }: SliderProps) {
  const { t } = useTranslation("home");

  const galleryItems: GalleryItem[] = homeServicesImgs.map(({ id, label }) => ({
    id,
    name: `services/${label}`,
    alt: t(`services.imgAlts.${label}`, { defaultValue: label }),
  }));

  const { sliderRef, itemRefs } = useCarousel(galleryItems.length, {
    initial: 2,
    onChange: onActiveChange, // <- avisa al padre
  });

  return (
    <div className={s.slider} ref={sliderRef}>
      {galleryItems.map((item, idx) => (
        <div
          key={item.id}
          ref={(el) => {
            itemRefs.current[idx] = el;
          }}
          className={s.item}
        >
          <ResponsiveImage
            name={item.name}
            alt={item.alt}
            preset="card"
            className={s.card}
          />
        </div>
      ))}
    </div>
  );
}
