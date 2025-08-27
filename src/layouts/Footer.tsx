// layouts/Footer.tsx
import s from "../assets/styles/layouts/footer.module.css";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";
import GradientButton from "../components/GradientButton";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import SmallButton from "../components/SmallButton";
import { Trans, useTranslation } from "react-i18next";
import { LANGS } from "../i18n/langs";

export default function Footer() {
  const { t, i18n } = useTranslation("footer");
  const current = (i18n.resolvedLanguage || i18n.language || "en").split(
    "-"
  )[0];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <h6>{t("follow")}</h6>

        <div className={s.titleBox}>
          <div className={s.socials}>
            <InstagramIcon />
            <LinkedinIcon />
          </div>

          <h3>
            <Trans
              i18nKey="headline"
              t={t}
              components={{
                pink: <span className="u--pink-text" />,
                blue: <span className="u--blue-text u--bold" />,
              }}
            />
          </h3>
        </div>

        <div className={s.cta}>
          <p>{t("ctaLabel")}</p>
          <GradientButton text={t("ctaButton")} variant="dark" />
        </div>

        <div className={s.footerContent}>
          <div className={s.logos}>
            <TextIcon />
            <NetneoIcon />
          </div>

          <div className={s.copyrights}>
            <div className={s.languages}>
              {LANGS.map(({ code, label, name }) => (
                <SmallButton
                  key={code}
                  text={label}
                  onClick={() => i18n.changeLanguage(code)}
                  active={current === code}
                  title={`Change language to ${name}`}
                />
              ))}
            </div>

            <a href="#">{t("terms")}</a>

            <p>
              <span>{t("rights", { year: new Date().getFullYear() })}</span>
              {t("allRights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
