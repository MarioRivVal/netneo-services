import s from "../assets/styles/pages/home.module.css";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";
import { reasonsIcons } from "../content/icons";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import SmallButton from "../components/SmallButton";
import StatsIcon from "../icons/StatsIcon";
import ResponsiveImage from "../components/ResponsiveImage";
import useServicesImages from "../hooks/components/useServicesImages";
import useReasons from "../hooks/components/useReasons";
import ProjectCards from "../components/ProjectCards";

export default function Home() {
  const { sliderRef, itemRefs, galleryItems, serviceActive } =
    useServicesImages();

  const {
    sliderRef: sliderReasonRef,
    itemRefs: itemReasonRef,
    reasonActive,
    reasonsList,
  } = useReasons();

  // TRANSLATIONS
  const { t } = useTranslation("home");

  const servicesList = t("services.servicesList", {
    returnObjects: true,
  }) as Record<string, string>[];

  // STATES

  return (
    <>
      <main className="main u--bg-gray u--flex-column">
        <Header scope={"header"} />
        <AsideBox
          directory="home"
          scope="header"
          showButtons={true}
          reverse={true}
          box={true}
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
          <div className={`${s.cardsContent} u--flex-column`}>
            <ul className={`${s.servicesList} u--flex-row`}>
              {servicesList.map((item, i) => (
                <li
                  key={i}
                  className={`${s.service} u--flex-column ${
                    i === serviceActive ? s.serviceActive : ""
                  }`}
                >
                  <span className={`${s.serviceNumber} u--light-text`}>{`/0${
                    i + 1
                  }`}</span>
                  <span className={s.serviceLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
            {/* IMAGES SLIDER*/}
            <div className={s.slider} ref={sliderRef}>
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={s.item}
                >
                  <ResponsiveImage
                    name={item.name}
                    alt={item.alt}
                    className={s.card}
                    priority={false}
                  />
                </div>
              ))}
            </div>

            <div className={`${s.servicesDetails} u--flex-column`}>
              <div className={`${s.detailsBox} u--flex-column`}>
                <h4>{servicesList[serviceActive].title}</h4>
                <p className="u--paragraph u--text-centered">
                  {servicesList[serviceActive].description}
                </p>
              </div>
            </div>

            <GradientButton text={t("services.btnDark")} variant="dark" />
          </div>
        </div>
      </section>

      {/*  REASONS SECTION */}
      <section className="section u--bg-gray">
        <div className={s.container}>
          <AsideBox directory="home" scope={"reasons"} showButtons={true} />
          <div className={`${s.box} u--mw-centered u--flex-column`}>
            <div className={s.stats}>
              <div className={s.statIcon}>
                <StatsIcon />
              </div>
              <div className={s.details}>
                <p className="u--light-text">{t("reasons.stats")}</p>
                <p>+10</p>
              </div>
            </div>

            <div className={`${s.reasonsList} u--flex-row`}>
              {reasonsList.map((item, index) => {
                return (
                  <SmallButton
                    text={item.label}
                    active={reasonActive === index}
                    Icon={
                      reasonActive === index
                        ? reasonsIcons[index].active
                        : reasonsIcons[index].unactive
                    }
                  />
                );
              })}
            </div>

            {/* REASONS SLIDER*/}
            <div
              className={`${s.slider} ${s.reasonSlider}`}
              ref={sliderReasonRef}
            >
              {reasonsList.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemReasonRef.current[index] = el;
                  }}
                  className={s.item}
                >
                  <div className={s.reasonBox}>
                    <div className={s.reasonIcon}>
                      {reasonActive === index
                        ? reasonsIcons[index].active
                        : reasonsIcons[index].unactive}
                    </div>
                    <p className={s.reasonParagraph}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTIONS */}
      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>{t("projects.contentTitle6")}</h6>
            <h3>
              <Trans
                i18nKey={`projects.title3`}
                t={t}
                components={{
                  blue: <span className="u--blue-text u--bold" />,
                  pink: <span className="u--pink-text" />,
                }}
              />
            </h3>
          </div>
          <div className={s.projectsGrid}>
            <ProjectCards />
          </div>
        </div>
      </section>
    </>
  );
}
