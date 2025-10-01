import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
// import {  useTranslation } from "react-i18next";
import useGalleryImages from "../hooks/components/useGalleryImages";
import { homeServicesImgs } from "../content/images";
import SliderImgBox from "../components/SliderImgBox";

export default function ServicesPage() {
  // const { t } = useTranslation("services");

  const servicesRef = useGalleryImages({
    imgItems: homeServicesImgs,
    directory: "home",
    scope: "services",
    initialIndex: 2,
  });

  // const servicesList = t("services.servicesList", {
  //   returnObjects: true,
  // }) as Record<string, string>[];

  return (
    <>
      <main className="main u--bg-light-blue u--flex-column">
        <Header scope="header" directory="services" />
        <AsideBox
          directory="services"
          scope="header"
          reverse={false}
          box={true}
          buttons={{
            display: "both",
            darkBtnTo: "/services",
            lightBtnTo: "https://wa.me/34642469683",
          }}
        />
      </main>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="services"
            scope={`services.servicesList.${servicesRef.serviceActive}`}
            reverse={true}
            box={true}
            buttons={{
              display: "none",
            }}
          />

          <div className={"cardsContent u--flex-column"}>
            <SliderImgBox
              sliderRef={
                servicesRef.sliderRef as React.RefObject<HTMLDivElement>
              }
              itemRef={servicesRef.itemRef}
              items={servicesRef.galleryItems}
            />
          </div>
        </div>
      </section>
    </>
  );
}
