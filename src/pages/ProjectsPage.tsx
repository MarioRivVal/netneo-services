import s from "../assets/styles/pages/projects.module.css";
import btnStyle from "../assets/styles/layouts/asideBox.module.css";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import { useTranslation, Trans } from "react-i18next";
import ProjectCards from "../components/ProjectCards";
import GradientButton from "../components/GradientButton";
import SliderTextBox from "../components/SliderTextBox";
import PhraseBox from "../components/PhraseBox";
import SliderImgBox from "../components/SliderImgBox";
import useGalleryImages from "../hooks/components/useGalleryImages";
import { clientsImgs } from "../content/images";
import type { ClientsItemsProps } from "../types/objects";

export default function ProjectsPage() {
  const partnersRef = useGalleryImages({
    imgItems: clientsImgs,
    directory: "projects",
    scope: "clients",
    initialIndex: 3,
  });
  const { t } = useTranslation("projects");

  const partnersList = t("clients.clientsList", {
    returnObjects: true,
  }) as ClientsItemsProps[];

  return (
    <>
      <main className="main u--bg-light-blue u--flex-column">
        <Header scope="header" directory="projects" />
        <AsideBox
          directory="projects"
          scope="header"
          reverse={true}
          box={true}
          buttons={{
            display: "both",
            darkBtnTo: "/services",
            lightBtnTo: "https://wa.me/34642469683",
          }}
        />
      </main>

      {/* PROJECTS SECTION */}
      <section className={`section ${s.sectionProjects}`}>
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
          <div className={`${btnStyle.btnsBox} ${s.btnsBox} u--flex-row`}>
            <GradientButton
              to="https://wa.me/34642469683"
              text={t(`projects.btnLight`)}
              variant="light"
            />

            <GradientButton
              onClick={() => {
                console.log("More projects");
              }}
              text={t(`projects.btnDark`)}
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>{t("testimonials.contentTitle6")}</h6>
            <h3 className="u--text-centered">
              <Trans
                i18nKey={`testimonials.title3`}
                t={t}
                components={{
                  blue: <span className="u--blue-text u--bold" />,
                  pink: <span className="u--pink-text" />,
                }}
              />
            </h3>
          </div>
          <SliderTextBox
            directory="projects"
            scope="testimonials"
            initialIndex={1}
          />
        </div>
      </section>

      {/* PHRASE BOX */}
      <PhraseBox index={1} />

      {/* CLIENTS SECTION */}
      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>{t("clients.contentTitle6")}</h6>
            <h3 className="u--text-centered">
              <Trans
                i18nKey={`clients.title3`}
                t={t}
                components={{
                  blue: <span className="u--blue-text u--bold" />,
                  pink: <span className="u--pink-text" />,
                }}
              />
            </h3>
          </div>
          <div className={"cardsContent u--flex-column"}>
            <SliderImgBox
              sliderRef={
                partnersRef.sliderRef as React.RefObject<HTMLDivElement>
              }
              itemRef={partnersRef.itemRef}
              items={partnersRef.galleryItems}
            />
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
    </>
  );
}
