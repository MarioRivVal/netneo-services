import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCarousel from "../useCarousel";

export default function useGalleryCards(
  directory: string,
  scope: string,
  initial: number
) {
  const [itemActive, setItemActive] = useState(initial);

  const { t } = useTranslation(directory);

  const itemsList = t(`${scope}.${scope}List`, {
    returnObjects: true,
  }) as Record<string, string>[];

  const { sliderRef, itemRef } = useCarousel(itemsList.length, {
    initial: itemActive,
    onChange: setItemActive,
  });

  return { sliderRef, itemRef, itemActive, itemsList };
}
