import s from "../assets/styles/components/gallery.module.css";

import ResponsiveImage from "./ResponsiveImage";

export type GalleryItem = {
  id: string | number;
  name: string; // ej: "services/web"
  alt: string; // ya resuelto (si quieres, desde i18n en la página)
};

type GalleryProps = {
  items: GalleryItem[];
  active: number;
  preset?: string; // opcional si tu ResponsiveImage lo usa
};

export default function Gallery({ items, active, preset }: GalleryProps) {
  const count = items.length;

  const getPosClass = (rel: number) => {
    if (rel === 0) return s.galleryItem3; // centro
    if (rel === 1) return s.galleryItem4; // derecha 1
    if (rel === 2) return s.galleryItem5; // derecha 2
    if (rel === count - 1) return s.galleryItem2; // izquierda 1
    if (rel === count - 2) return s.galleryItem1; // izquierda 2
    return ""; // fuera/oculto
  };

  return (
    <div className={s.gallery}>
      {items.map((item, i) => {
        const rel = (i - active + count) % count;
        const posCls = getPosClass(rel);
        return (
          <ResponsiveImage
            key={item.id}
            name={item.name}
            alt={item.alt}
            className={`${s.galleryItem}  ${posCls}`}
            // @ts-expect-error Quita si no usas "preset" en ResponsiveImage
            preset={preset}
          />
        );
      })}
    </div>
  );
}
