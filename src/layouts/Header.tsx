import s from "../assets/styles/layouts/header.module.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveImage from "../components/ResponsiveImage";
import useScramble from "../hooks/useScramble";

type HeaderProps = {
  scope: string;
};

export default function Header({ scope }: HeaderProps) {
  const { t } = useTranslation("home");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const words = t(`${scope}.title1`, { returnObjects: true }) as string[];
  useScramble(titleRef, words, { holdMs: 1200, fps: 30, loop: true });

  return (
    <header className={`${s.header} u--flex-column u--mw-centered`}>
      <h6>{t(`${scope}.title6`)}</h6>

      <div>
        <h5>{t(`${scope}.title5`)}</h5>
        <h2>{t(`${scope}.title2`)}</h2>
      </div>

      <div className={s.ImgBox}>
        <ResponsiveImage
          name={`home/${scope}`}
          alt={t(`${scope}.imgAlt`, { defaultValue: "Imagen de cabecera" })}
          preset="header"
          priority
          className={s.headerImg}
        />
        <div className={`${s.titleBox} u--flex-row`}>
          <h1 ref={titleRef} className={s.mainTitle} />
        </div>
      </div>
    </header>
  );
}
