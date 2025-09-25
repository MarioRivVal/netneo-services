import s from "../assets/styles/components/projectCardsPreview.module.css";
import ResponsiveImage from "./ResponsiveImage";
import { projectImgs } from "../content/images";
// import { useTranslation } from "react-i18next";

export default function ProjectCardsPreview() {
  // const { t } = useTranslation("home");

  const projectItems = projectImgs.map(({ id, label, url }) => ({
    id,
    name: label,
    url,
    // alt: t(`projects.projectsList.${index}.imgAlt`),
  }));

  return (
    <>
      {projectItems.map((item) => (
        <ResponsiveImage
          key={item.id}
          name={`projects/${item.name}`}
          alt="prueba"
          priority={false}
          className={`${s.imgBox}  ${s[`imgBox${item.id}`]}  ${
            item.id % 2 === 0 ? s.reverse : ""
          }`}
        />
      ))}
    </>
  );
}
