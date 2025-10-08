import s from "../assets/styles/pages/home.module.css";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import useGalleryImages from "../hooks/components/useGalleryImages";
import ProjectCardsPreview from "../components/ProjectCardsPreview";
import { homeServicesImgs } from "../content/images";
import SliderTextBox from "../components/SliderTextBox";
import SliderImgBox from "../components/SliderImgBox";
import PortfolioBox from "../components/PortfolioBox";

export default function Home() {
  const servicesRef = useGalleryImages({
    imgItems: homeServicesImgs,
    directory: "home",
    scope: "services",
    initialIndex: 2,
  });

  // TRANSLATIONS
  const { t } = useTranslation("home");

  const servicesList = t("services.servicesList", {
    returnObjects: true,
  }) as Record<string, string>[];

  return (
    <>
      <main className="main u--bg-light-blue u--flex-column">
        <Header scope="header" directory="home" />
        <AsideBox
          directory="home"
          scope="header"
          reverse={true}
          box={true}
          buttons={{
            display: "both",
            darkBtnTo: "https://wa.me/34642469683",
            lightBtnTo: "https://wa.me/34642469683",
          }}
        />
      </main>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>{t("services.contentTitle6")}</h6>
            <h3>
              <Trans
                i18nKey={`services.title3`}
                t={t}
                components={{
                  blue: <span className="u--blue-text u--bold" />,
                  pink: <span className="u--pink-text" />,
                }}
              />
            </h3>
          </div>
          <div className={"cardsContent u--flex-column"}>
            <ul className={`${s.servicesList} u--flex-row`}>
              {servicesList.map((item, i) => (
                <li
                  key={i}
                  className={`${s.service} u--flex-column ${
                    i === servicesRef.serviceActive ? s.serviceActive : ""
                  }`}
                >
                  <span className={`${s.serviceNumber} u--light-text`}>{`/0${
                    i + 1
                  }`}</span>
                  <span className={s.serviceLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
            <SliderImgBox
              sliderRef={
                servicesRef.sliderRef as React.RefObject<HTMLDivElement>
              }
              itemRef={servicesRef.itemRef}
              items={servicesRef.galleryItems}
            />
            <div className={`${s.servicesDetails} u--flex-column`}>
              <div className={`${s.detailsBox} u--flex-column`}>
                <h4>{servicesList[servicesRef.serviceActive].title}</h4>
                <p className="u--paragraph u--text-centered">
                  {servicesList[servicesRef.serviceActive].description}
                </p>
              </div>
            </div>

            <GradientButton
              to="/services"
              text={t("services.btnDark")}
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/*  REASONS SECTION */}
      <section className="section u--bg-light-blue">
        <div className="container">
          <AsideBox
            directory="home"
            scope={"reasons"}
            box={true}
            buttons={{
              display: "both",
              lightBtnTo: "https://wa.me/34642469683",
              darkBtnTo: "./services",
            }}
          />

          <SliderTextBox directory="home" scope="reasons" initialIndex={2} />
        </div>
      </section>

      {/* PROJECTS SECTIONS */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="home"
            scope={"projects"}
            box={true}
            reverse
            buttons={{
              display: "both",
              lightBtnTo: "./projects",
              darkBtnTo: "./projects",
            }}
          />
          <div className={`${s.projectsBox} u--flex-column`}>
            <ProjectCardsPreview />
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <PortfolioBox />
    </>
  );
}
