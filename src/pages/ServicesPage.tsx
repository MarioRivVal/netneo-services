import s from "../assets/styles/pages/services.module.css";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
// import {  useTranslation } from "react-i18next";
import useGalleryImages from "../hooks/components/useGalleryImages";
import { homeServicesImgs } from "../content/images";
import SliderImgBox from "../components/SliderImgBox";
import PhraseBox from "../components/PhraseBox";
import { useTranslation } from "react-i18next";
import { numbersImgs } from "../content/images";
import StepBox from "../components/StepBox";
import SliderTextBox from "../components/SliderTextBox";
import PortfolioBox from "../components/PortfolioBox";

export default function ServicesPage() {
  const { t } = useTranslation("services");

  const servicesRef = useGalleryImages({
    imgItems: homeServicesImgs,
    directory: "services",
    scope: "services",
    initialIndex: 2,
  });

  const stepsItems = numbersImgs.map(({ id, label }) => ({
    id,
    imgName: `utils/numbers/${label}`,
    imgAlt: t(`steps.stepsList.${id - 1}.imgAlt`),
    title: t(`steps.stepsList.${id - 1}.title`),
    paragraph: t(`steps.stepsList.${id - 1}.paragraph`),
  }));

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
              stats={true}
              activeIndex={servicesRef.serviceActive}
            />
          </div>
        </div>
      </section>

      {/* PHRASE BOX */}
      <PhraseBox phrase={1} />

      {/* STEPS SECTION */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="services"
            scope="steps"
            buttons={{
              display: "both",
              darkBtnTo: "/projects",
              lightBtnTo: "https://wa.me/34642469683",
            }}
          />
          <div className={` ${s.stepsContent} u--flex-column`}>
            {stepsItems.map((item, i) => (
              <StepBox
                key={i}
                item={item}
                reverse={i % 2 === 0 ? true : false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHRASE BOX */}
      <PhraseBox phrase={2} />

      {/* FAQ`S SECTION */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="services"
            scope="faqs"
            reverse={true}
            buttons={{
              display: "one",
              darkBtnTo: "https://wa.me/34642469683",
            }}
          />
        </div>
        <SliderTextBox directory="services" scope="faqs" initialIndex={3} />
      </section>

      {/* PORTFOLIO SECTION */}
      <PortfolioBox />
    </>
  );
}
