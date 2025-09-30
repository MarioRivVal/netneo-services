import s from "../assets/styles/components/phraseBox.module.css";
import QuoteIcon from "../icons/others/Quote";
import { useTranslation } from "react-i18next";
import type { PhraseBoxProps } from "../types/components";

export default function PhraseBox({ index }: PhraseBoxProps) {
  const { t } = useTranslation("generals");

  return (
    <div className={s.box}>
      <div className={s.content}>
        <div className={s.icon}>
          <QuoteIcon />
        </div>
        <p className={s.phrase}>{t(`phrases.phrase${index}.text`)}</p>
        <span className={s.author}>{t(`phrases.phrase${index}.author`)}</span>
      </div>
    </div>
  );
}
