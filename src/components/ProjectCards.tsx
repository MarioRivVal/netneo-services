import s from "../assets/styles/components/projectCards.module.css";
import ResponsiveImage from "./ResponsiveImage";
import GradientButton from "./GradientButton";
import { projectImgs } from "../content/images";
import { useTranslation } from "react-i18next";

export default function ProjectCards() {
  const { t } = useTranslation("projects");

  const projectItems = projectImgs.map(({ id, label, url }, index) => ({
    id,
    name: label,
    url,
    alt: t(`projects.projectsList.${index}.imgAlt`),
    title: t(`projects.projectsList.${index}.title`),
    description: t(`projects.projectsList.${index}.description`),
  }));

  return (
    <>
      {projectItems.map((item) => (
        <div key={item.id} className={`${s.card}`}>
          <ResponsiveImage
            name={`projects/${item.name}`}
            alt={item.alt}
            priority={false}
            className={`u--flex-row ${s.imgBox}  ${s[`imgBox${item.id}`]}  ${
              item.id % 2 === 0 ? s.reverse : ""
            }`}
          />

          <div className={`${s.infoBox} u--flex-column`}>
            <h4>{item.title}</h4>
            <p className="u--paragraph u--text-centered">{item.description}</p>
            <GradientButton to={item.url} text="Online" variant="light" />
          </div>
        </div>
      ))}
    </>
  );
}
