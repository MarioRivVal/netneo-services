import s from "../assets/styles/layouts/main.module.css";
import { useRef, type ReactNode } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import useScramble from "../hooks/useScramble";
import GradientButton from "../components/GradientButton";
import { Trans, useTranslation } from "react-i18next";

type MainProps = {
  scope: string;
  showButtons?: boolean;
  children?: ReactNode;
  reverse?: boolean;
};

export default function Main({
  scope,
  showButtons = true,
  children,
  reverse = false,
}: MainProps) {
  const { t } = useTranslation("home");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const words = t(`${scope}.title1`, { returnObjects: true }) as string[];
  useScramble(titleRef, words, { holdMs: 1200, fps: 30, loop: true });

  return (
    <main className="main u--bg-gray u--flex-column">
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

      <aside className={`${s.aside} u--mw-centered`}>
        <h6>{t(`${scope}.contentTitle6`)}</h6>
        <h3 className={`${reverse ? s.titleReverse : ""} `}>
          <Trans
            i18nKey={`${scope}.title3`}
            t={t}
            components={{
              blue: <span className="u--blue-text u--bold" />,
              pink: <span className="u--pink-text" />,
            }}
          />
        </h3>

        <div className={`${s.box} u--flex-column`}>
          <p className="u--paragraph">{t(`${scope}.paragraph`)}</p>

          {showButtons && (
            <div className={`${s.btnsBox} u--flex-column`}>
              {children ?? (
                <>
                  <GradientButton text={t(`${scope}.btnDark`)} variant="dark" />
                  <GradientButton
                    text={t(`${scope}.btnLight`)}
                    variant="light"
                  />
                </>
              )}
            </div>
          )}
        </div>
      </aside>
    </main>
  );
}
