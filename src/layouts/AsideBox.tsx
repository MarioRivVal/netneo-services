import s from "../assets/styles/layouts/asideBox.module.css";
import { Trans, useTranslation } from "react-i18next";
import GradientButton from "../components/GradientButton";

type AsideBoxProps = {
  directory: string;
  scope: string;
  showButtons?: boolean;
  reverse?: boolean;
  box?:boolean
};

export default function AsideBox({
  directory,
  scope,
  showButtons,
  reverse,
  box= false
}: AsideBoxProps) {
  const { t } = useTranslation(directory);

  return (
    <aside className={`${s.aside} ${box ? s.boxStyle : ""} u--mw-centered`}>
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
            <GradientButton text={t(`${scope}.btnLight`)} variant="light" />
            <GradientButton text={t(`${scope}.btnDark`)} variant="dark" />
          </div>
        )}
      </div>
    </aside>
  );
}
