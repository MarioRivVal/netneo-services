import { useState } from "react";
import useCarousel from "../useCarousel";
import { useTranslation } from "react-i18next";

type GalleryItemProps = { id: number; name: string; alt: string };
type ImgItemsProps = {
  id: number;
  label: string;
};

export default function useGalleryImages(
  imgItems: ImgItemsProps[],
  section: string,
  initial: number
) {
  const [serviceActive, setServiceActive] = useState(initial);
  const { t } = useTranslation("home");

  const { sliderRef, itemRef } = useCarousel(imgItems.length, {
    initial: serviceActive,
    onChange: setServiceActive,
  });

  const galleryItems: GalleryItemProps[] = imgItems.map(
    ({ id, label }, index) => ({
      id,
      name: `${section}/${label}`,
      alt: t(`${section}.${section}List.${index}.imgAlt`, {
        defaultValue: label,
      }),
    })
  );

  return { sliderRef, itemRef, galleryItems, serviceActive };
}
