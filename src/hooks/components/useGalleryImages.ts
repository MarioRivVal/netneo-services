import { useState } from "react";
import useCarousel from "../useCarousel";
import { useTranslation } from "react-i18next";
import type { UseGalleryImagesProps } from "../../types/hooks";
import type { ImgItemsProps } from "../../types/objects";

export default function useGalleryImages({
  imgItems,
  directory,
  scope,
  initialIndex,
}: UseGalleryImagesProps) {
  const [serviceActive, setServiceActive] = useState(initialIndex);
  const { t } = useTranslation(directory);

  const { sliderRef, itemRef } = useCarousel(imgItems.length, {
    initial: serviceActive,
    onChange: setServiceActive,
  });

  const galleryItems: ImgItemsProps[] = imgItems.map(
    ({ id, label }, index) => ({
      id,
      name: `${scope}/${label}`,
      alt: t(`${scope}.${scope}List.${index}.imgAlt`, {
        defaultValue: label,
      }),
      statsNumber: t(`${scope}.${scope}List.${index}.statsNumber`),
      statsLabel: t(`${scope}.${scope}List.${index}.statsLabel`),
    })
  );

  return { sliderRef, itemRef, galleryItems, serviceActive };
}
