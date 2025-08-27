import { useState } from "react";
import s from "../assets/styles/pages/home.module.css";
import Main from "../layouts/Main";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";
import Gallery, { type GalleryItem } from "../components/Gallery";
import SliderBtns from "../components/SliderBtns";

export default function Home() {
  const { t } = useTranslation("home");

  const servicesList = t("services.servicesList", {
    returnObjects: true,
  }) as string[];

  const servicesDetails = t("services.servicesDetails", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  const baseImgs = [
    { id: "1", label: "design" },
    { id: "2", label: "web" },
    { id: "3", label: "app" },
    { id: "4", label: "ia" },
    { id: "5", label: "seo" },
  ];

  const galleryItems: GalleryItem[] = baseImgs.map(({ id, label }) => ({
    id,
    name: `services/${label}`,
    alt: t(`services.imgAlts.${label}`, { defaultValue: label }),
  }));

  const count = galleryItems.length;
  const [active, setActive] = useState(2);
  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);

  return (
    <>
      <Main scope="header" reverse={true} />

      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>{t("services.title6")}</h6>
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

          <div className={s.cardsContent}>
            <ul className={s.servicesList} aria-label="Servicios">
              {servicesList.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={i}
                    className={`${s.service} ${
                      isActive ? s.serviceActive : ""
                    }`}
                    role="listitem"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={s.serviceNumber}>{`/0${i + 1}`}</span>
                    <span className={s.serviceLabel}>{item}</span>
                  </li>
                );
              })}
            </ul>

            {/* GALLERY */}
            <Gallery items={galleryItems} active={active} preset="card" />

            {/* SLIDER CONTROLES */}
            <div className={s.servicesSliders}>
              <div className={s.detailsBox}>
                <h4>{servicesDetails[active].title}</h4>
                <p className={s.detailDesc}>
                  {servicesDetails[active].description}
                </p>
              </div>
              <SliderBtns
                count={count}
                active={active}
                onPrev={prev}
                onNext={next}
              />
            </div>
            <GradientButton text={t("services.btnDark")} variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
