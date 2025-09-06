import { useState } from "react";
import useCarousel from "../useCarousel";
import { homeServicesImgs } from "../../content/images";
import { useTranslation } from "react-i18next";

type GalleryItemProps = { id: string | number; name: string; alt: string };

export default function useServicesImages() {
  const [serviceActive, setServiceActive] = useState(2);
  const { t } = useTranslation("home");

  const { sliderRef, itemRefs } = useCarousel(homeServicesImgs.length, {
    initial: serviceActive,
    onChange: setServiceActive,
  });

  const galleryItems: GalleryItemProps[] = homeServicesImgs.map(
    ({ id, label }, index) => ({
      id,
      name: `services/${label}`,
      alt: t(`services.servicesList.${index}.imgAlt`, { defaultValue: label }),
    })
  );

  return { sliderRef, itemRefs, galleryItems, serviceActive };
}
