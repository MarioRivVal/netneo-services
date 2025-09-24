import s from "../assets/styles/pages/home.module.css";
// import as from "../assets/styles/layouts/asideBox.module.css";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";
import { reasonsIcons } from "../content/icons";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import SmallButton from "../components/SmallButton";
import StatsIcon from "../icons/StatsIcon";
import ResponsiveImage from "../components/ResponsiveImage";
import useGalleryImages from "../hooks/components/useGalleryImages";
import useGalleryCards from "../hooks/components/useGalleryCards";
import ProjectCards from "../components/ProjectCards";
import { homeServicesImgs, partnerImgs } from "../content/images";

type Partner = {
  imgAlt: string;
  category: string;
  subcategories: string[];
};

export default function Home() {
  const servicesRef = useGalleryImages(homeServicesImgs, "services", 2);
  const partnersRef = useGalleryImages(partnerImgs, "partners", 3);
  const reasonsRef = useGalleryCards("home", "reasons", 2);
  const testimonialRef = useGalleryCards("home", "testimonials", 1);

  // TRANSLATIONS
  const { t } = useTranslation("home");

  const servicesList = t("services.servicesList", {
    returnObjects: true,
  }) as Record<string, string>[];

  const partnersList = t("partners.partnersList", {
    returnObjects: true,
  }) as Partner[];

  // STATES

  return (
    <>
      <main className="main u--bg-light-blue u--flex-column">
        <Header scope={"header"} />
        <AsideBox
          directory="home"
          scope="header"
          showButtons={true}
          lightBtnTo="https://wa.me/34642469683"
          darkBtnTo="https://wa.me/34642469683"
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
            {/* IMAGES SLIDER*/}
            <div className={s.slider} ref={servicesRef.sliderRef}>
              {servicesRef.galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    servicesRef.itemRef.current[idx] = el;
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
                <h4>{servicesList[servicesRef.serviceActive].title}</h4>
                <p className="u--paragraph u--text-centered">
                  {servicesList[servicesRef.serviceActive].description}
                </p>
              </div>
            </div>

            <GradientButton to="" text={t("services.btnDark")} variant="dark" />
          </div>
        </div>
      </section>

      {/*  REASONS SECTION */}
      <section className="section u--bg-gray">
        <div className={s.container}>
          <AsideBox
            directory="home"
            scope={"reasons"}
            showButtons={true}
            lightBtnTo="https://wa.me/34642469683"
            darkBtnTo="https://wa.me/34642469683"
          />
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
              {reasonsRef.itemsList.map((item, index) => {
                return (
                  <SmallButton
                    text={item.label}
                    active={reasonsRef.reasonActive === index}
                    Icon={
                      reasonsRef.reasonActive === index
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
              ref={reasonsRef.sliderRef}
            >
              {reasonsRef.itemsList.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    reasonsRef.itemRef.current[index] = el;
                  }}
                  className={s.item}
                >
                  <div className={s.reasonBox}>
                    <div className={s.reasonIcon}>
                      {reasonsRef.reasonActive === index
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
          {/* <div className={`${as.btnsBox} u--flex-row`}>
            <GradientButton text={t("projects.btnLight")} variant="light" />
            <GradientButton text={t("projects.btnDark")} variant="dark" />
          </div> */}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="section u--bg-gray">
        <div className="container">
          <div className="title-box">
            <h6>{t("partners.contentTitle6")}</h6>
            <h3>
              <Trans
                i18nKey={`partners.title3`}
                t={t}
                components={{
                  blue: <span className="u--blue-text u--bold" />,
                  pink: <span className="u--pink-text" />,
                }}
              />
            </h3>
          </div>

          <div className={`${s.cardsContent} u--flex-column`}>
            {/* IMAGES SLIDER*/}
            <div className={s.slider} ref={partnersRef.sliderRef}>
              {partnersRef.galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    partnersRef.itemRef.current[idx] = el;
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
                <h4>{partnersList[partnersRef.serviceActive].category}</h4>
                <div
                  className={`${s.partnersSub} u--paragraph u--text-centered`}
                >
                  {partnersList[partnersRef.serviceActive].subcategories.map(
                    (sub, i) => (
                      <span key={i}>{sub}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="home"
            darkBtnTo=""
            lightBtnTo=""
            scope="testimonials"
            reverse={true}
            box={true}
          />
          <div className={`${s.box} u--mw-centered u--flex-column`}>
            <div className={s.stats}>
              <div className={s.statIcon}>
                <StatsIcon />
              </div>
              <div className={s.details}>
                <p className="u--light-text">{t("testimonials.stats")}</p>
                <p>100%</p>
              </div>
            </div>

            {/* TESTIMONIALS SLIDER*/}
            <div
              className={`${s.slider} ${s.testimonialsSlider}`}
              ref={testimonialRef.sliderRef}
            >
              {testimonialRef.itemsList.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    testimonialRef.itemRef.current[index] = el;
                  }}
                  className={s.item}
                >
                  <div className={`${s.reasonBox} ${s.testimonialsBox}`}>
                    <div className={s.reasonIcon}></div>
                    <div className={s.testimonialsUser}>
                      <span>{item.profession}</span>
                      <span>{item.name}</span>
                    </div>
                    <p className={s.reasonParagraph}>{item.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}

      <section className="section u--bg-gray">
        <div className="container">
          <AsideBox
            directory="home"
            scope="curriculum"
            showButtons
            darkBtnTo="https://netneoportfolio.netlify.app/"
            lightBtnTo="/docs/CV_Mario_Rivera_esp_digital.pdf"
            reverse={true}
            box={true}
          />
          {/* <div className={`${s.stats}`}>
            <div className={s.curriculumCta}>
              <p>{t("curriculum.btnTitle")}</p>
              <div className={s.btnsBox}>
                <GradientButton variant="dark" text={t("curriculum.btnDark")} />
                <GradientButton
                  variant="light"
                  text={t("curriculum.btnLight")}
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
