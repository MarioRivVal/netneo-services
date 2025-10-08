import s from "../assets/styles/pages/about.module.css";
import Header from "../layouts/Header";
import AsideBox from "../layouts/AsideBox";
import StepBox from "../components/StepBox";
import PortfolioBox from "../components/PortfolioBox";
import { numbersImgs } from "../content/images";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  const stepsItems = numbersImgs.map(({ id, label }) => ({
    id,
    imgName: `utils/numbers/${label}`,
    imgAlt: t(`philosophy.philosophyList.${id - 1}.imgAlt`),
    title: t(`philosophy.philosophyList.${id - 1}.title`),
    paragraph: t(`philosophy.philosophyList.${id - 1}.paragraph`),
  }));
  return (
    <>
      <main className="main u--bg-light-blue u--flex-column">
        <Header scope="header" directory="about" />
        <AsideBox
          directory="about"
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

      {/* STEPS SECTION */}
      <section className="section">
        <div className="container">
          <AsideBox
            directory="about"
            scope="philosophy"
            buttons={{
              display: "none",
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

      {/* PORTFOLIO SECTION */}
      <PortfolioBox />
    </>
  );
}
