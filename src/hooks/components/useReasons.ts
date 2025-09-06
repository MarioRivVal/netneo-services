import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCarousel from "../useCarousel";

export default function useReasons() {
  const [reasonActive, setReasonActive] = useState(2);

  const { t } = useTranslation("home");

  const reasonsList = t("reasons.reasonList", {
    returnObjects: true,
  }) as Record<string, string>[];

  const { sliderRef, itemRefs } = useCarousel(reasonsList.length, {
    initial: reasonActive,
    onChange: setReasonActive,
  });

  return { sliderRef, itemRefs, reasonActive, reasonsList };
}
