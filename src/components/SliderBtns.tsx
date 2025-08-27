import s from "../assets/styles/components/sliderBtns.module.css";
import ChevronIcon from "../icons/Chevron";

type SliderBtnsProps = {
  count: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function SliderBtns({
  count,
  active,
  onPrev,
  onNext,
}: SliderBtnsProps) {
  return (
    <div className={s.sliderBtns}>
      <ol className={s.dots}>
        {Array.from({ length: count }).map((_, i) => (
          <li key={i}>
            <span className={`${s.dot} ${i === active ? s.dotActive : ""}`} />
          </li>
        ))}
      </ol>

      <div className={s.btns}>
        <button
          className={`${s.chevronBtn} ${s.chevronLeft}`}
          onClick={onPrev}
          title="Previous"
          aria-label="Previous"
        >
          <ChevronIcon />
        </button>
        <button
          className={`${s.chevronBtn} ${s.chevronRight}`}
          onClick={onNext}
          title="Next"
          aria-label="Next"
        >
          <ChevronIcon />
        </button>
      </div>
    </div>
  );
}
