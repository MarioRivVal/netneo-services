import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCarousel from "../useCarousel";

export default function useGalleryCards(
  directory: string,
  scope: string,
  initial: number
) {
  const [reasonActive, setReasonActive] = useState(initial);

  const { t } = useTranslation(directory);

  const itemsList = t(`${scope}.${scope}List`, {
    returnObjects: true,
  }) as Record<string, string>[];
  console.log(itemsList);

  const { sliderRef, itemRef } = useCarousel(itemsList.length, {
    initial: reasonActive,
    onChange: setReasonActive,
  });

  return { sliderRef, itemRef, reasonActive, itemsList };
}
