// import { useState } from "react";
import s from "../assets/styles/pages/home.module.css";
import car from "../assets/styles/main.module.css";
// import c from "../assets/styles/layouts/contentBox.module.css";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";
import Gallery, { type GalleryItem } from "../components/Gallery";
import { homeServicesImgs } from "../content/images";
import { reasonsIcons } from "../content/icons";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import SmallButton from "../components/SmallButton";
// import ContentBox from "../layouts/ContentBox";
// import StatsIcon from "../icons/StatsIcon";
// import PuzzleIcon from "../icons/PuzzleIcon";
import useCarousel from "../hooks/useCarousel";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Home() {
  // TRANSLATIONS
  const { t } = useTranslation("home");

  const servicesList = t("services.servicesList", {
    returnObjects: true,
  }) as string[];

  // const servicesDetails = t("services.servicesDetails", {
  //   returnObjects: true,
  // }) as { title: string; description: string }[];

  const order = t("reasons.order", { returnObjects: true }) as string[];

  const reasonsList = t("reasons.reasonsList", {
    returnObjects: true,
  }) as Record<string, string>;

  const galleryItems: GalleryItem[] = homeServicesImgs.map(({ id, label }) => ({
    id,
    name: `services/${label}`,
    alt: t(`services.imgAlts.${label}`, { defaultValue: label }),
  }));

  console.log(galleryItems);

  // STATES

  // const [active, setActive] = useState(0);
  const { sliderRef, itemRefs } = useCarousel(galleryItems.length);

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
            <ul
              className={`${s.servicesList} u--flex-row`}
              aria-label="Servicios"
            >
              {/* {servicesList.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={i}
                    className={`${s.service} u--flex-column ${
                      isActive ? s.serviceActive : ""
                    }`}
                    role="listitem"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={`${s.serviceNumber} u--light-text`}>{`/0${
                      i + 1
                    }`}</span>
                    <span className={s.serviceLabel}>{item}</span>
                  </li>
                );
              })} */}
            </ul>

            <div className={car.slider} ref={sliderRef}>
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={car.item}
                >
                  <ResponsiveImage
                    key={item.id}
                    name={item.name}
                    alt={item.alt}
                    preset="card"
                    className={car.card}
                  />
                </div>
              ))}
            </div>

            {/* <div className={`${s.servicesDetails} u--flex-column`}>
              <div className={`${s.detailsBox} u--flex-column`}>
                <h4>{servicesDetails[active].title}</h4>
                <p className="u--paragraph">
                  {servicesDetails[active].description}
                </p>
              </div>
            </div> */}

            <GradientButton text={t("services.btnDark")} variant="dark" />
          </div>
        </div>
      </section>

      {/*  REASONS SECTION */}
      <section className="section u--bg-gray">
        <div className={s.container}>
          <AsideBox directory="home" scope={"reasons"} showButtons={true} />
          <div className={`${s.reasonsBox} u--mw-centered u--flex-column`}>
            <div className={`${s.reasonsList} u--flex-row`}>
              {order.map((key) => {
                const Icon = reasonsIcons[key as keyof typeof reasonsIcons];
                const label = t(`reasons.labels.${key}`);
                return <SmallButton text={label} icon={<Icon />} />;
              })}
            </div>
            {/* <ContentBox
              childrenAside={
                <>
                  <div className={c.statIcon}>
                    <StatsIcon />
                  </div>
                  <div className={c.details}>
                    <p className="u--light-text">Clientes Satisfechos</p>
                    <p>+10</p>
                  </div>
                </>
              }
              childrenList={
                <>
                  <div className={c.reasonIcon}>
                    <PuzzleIcon />
                  </div>
                  <p>{reasonsList[reasonActive]}</p>
                </>
              }
              count={5}
              active={3}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}
