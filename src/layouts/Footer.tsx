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
  const { t, i18n } = useTranslation("generals");
  const current = (i18n.resolvedLanguage || i18n.language || "en").split(
    "-"
  )[0];

  return (
    <footer className={s.footer}>
      <div className={`${s.container} u--flex-column u--mw-centered`}>
        <h6>{t("footer.follow")}</h6>

        <div className={`${s.titleBox} u--flex-column`}>
          <div className={`${s.socials} u--flex-row`}>
            <InstagramIcon />
            <LinkedinIcon />
          </div>

          <h3>
            <Trans
              i18nKey="footer.headline"
              t={t}
              components={{
                pink: <span className="u--pink-text" />,
                blue: <span className="u--blue-text u--bold" />,
              }}
            />
          </h3>
        </div>

        <div className={`${s.cta} u--flex-row`}>
          <p className="u--paragraph">{t("footer.ctaLabel")}</p>
          <GradientButton
            text={t("footer.ctaButton")}
            variant="dark"
            to="https://wa.me/34642469683"
          />
        </div>

        <div className={`${s.footerContent} u--flex-column`}>
          <div className={`${s.logos} u--flex-row`}>
            <TextIcon />
            <NetneoIcon />
          </div>

          <div className={` u--flex-column ${s.copyrights}`}>
            <div className={`${s.languages} u--flex-row`}>
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

            <a href="#">{t("footer.terms")}</a>

            <p>
              <span>{t("rights", { year: new Date().getFullYear() })}</span>
              {t("footer.allRights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
