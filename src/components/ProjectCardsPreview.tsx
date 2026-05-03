import s from "../assets/styles/components/projectCardsPreview.module.css";
import ResponsiveImage from "./ResponsiveImage";
import { projectImgs } from "../content/images";
import { useTranslation } from "react-i18next";

export default function ProjectCardsPreview() {
  const { t } = useTranslation("projects");

  const projectItems = projectImgs
    .slice(0, 4)
    .map(({ id, label, url, background }, index) => ({
      id,
      name: label,
      url,
      alt: t(`projects.projectsList.${index}.imgAlt`),
      background,
    }));

  return (
    <>
      {projectItems.map((item) => (
        <ResponsiveImage
          key={item.id}
          name={`projects/${item.name}`}
          alt={item.alt}
          priority={false}
          className={` u--flex-row ${s.imgBox}  ${s[`imgBox${item.id}`]} ${s[item.background]}`}
        />
      ))}
    </>
  );
}
