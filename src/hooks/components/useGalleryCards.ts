import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCarousel from "../useCarousel";
import type { UseGalleryCardsProps } from "../../types/hooks";

export default function useGalleryCards({
  directory,
  scope,
  initialIndex,
}: UseGalleryCardsProps) {
  const [itemActive, setItemActive] = useState(initialIndex);

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
