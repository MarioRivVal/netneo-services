import s from "../assets/styles/layouts/main.module.css";
import { useRef, type ReactNode } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import useScramble from "../hooks/useScramble";
import GradientButton from "../components/gradientButton";
import { Trans, useTranslation } from "react-i18next";

type MainProps = {
  scope: string;
  showButtons?: boolean;
  children?: ReactNode;
};

export default function Main({
  scope,
  showButtons = true,
  children,
}: MainProps) {
  const { t } = useTranslation("header");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const words = t(`${scope}.title1`, { returnObjects: true }) as string[];
  useScramble(titleRef, words, { holdMs: 1200, fps: 30, loop: true });

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h6>{t(`${scope}.title6`)}</h6>

        <div>
          <h5>{t(`${scope}.title5`)}</h5>
          <h2>{t(`${scope}.title2`)}</h2>
        </div>

        <div className={s.ImgBox}>
          <ResponsiveImage
            name={`headers/${scope}`}
            alt={t(`${scope}.imgAlt`, { defaultValue: "Imagen de cabecera" })}
            priority
            className={s.headerImg}
          />
          <div className={s.titleBox}>
            <h1 ref={titleRef} className={s.mainTitle} />
          </div>
        </div>
      </header>

      <aside className={s.aside}>
        <h6>{t(`${scope}.contentTitle6`)}</h6>
        <h3>
          <Trans
            i18nKey={`${scope}.title3`}
            t={t}
            components={{
              blue: <span className="u--blue-text u--bold" />,
              pink: <span className="u--pink-text" />,
            }}
          />
        </h3>

        <div className={s.box}>
          <p className={s.paragraph}>{t(`${scope}.paragraph`)}</p>

          {showButtons && (
            <div className={s.btnsBox}>
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
