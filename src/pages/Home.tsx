import { useMemo, useState } from "react";
import s from "../assets/styles/pages/home.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import Main from "../layouts/Main";
import ChevronIcon from "../icons/Chevron";

export default function Home() {
  const servicesList = [
    { id: "1", label: "design" },
    { id: "2", label: "web" },
    { id: "3", label: "app" },
    { id: "4", label: "ia" },
    { id: "5", label: "seo" },
  ];

  const count = servicesList.length;

  const [active, setActive] = useState(2);

  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);

  const posClass = (rel: number) => {
    if (rel === 0) return s.galleryItem3;
    if (rel === 1) return s.galleryItem4;
    if (rel === 2) return s.galleryItem5;
    if (rel === count - 1) return s.galleryItem2;
    if (rel === count - 2) return s.galleryItem1;
    return "";
  };

  const itemsWithPos = useMemo(
    () =>
      servicesList.map((item, i) => {
        const rel = (i - active + count) % count;
        return { ...item, rel, cls: posClass(rel) };
      }),
    [servicesList, active, count]
  );

  return (
    <>
      <Main scope="header" reverse={true} />

      <section className="section">
        <div className="container">
          <div className="title-box">
            <h6>//Servicios__</h6>
            <h3>
              Lo que hacemos por ti. Tranformamos{" "}
              <span className="u--pink-text">ideas</span> en{" "}
              <span className="u--blue-text u--bold">soluciones</span>{" "}
              digitales.
            </h3>
          </div>

          <div className={s.cardsContent}>
            <ul className={s.servicesList} aria-label="Servicios">
              {servicesList.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={item.id}
                    className={`${s.service} ${
                      isActive ? s.serviceActive : ""
                    }`}
                    role="listitem"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={s.serviceNumber}>{`/0${item.id}`}</span>
                    <span className={s.serviceLabel}>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            {/* GALLERY */}
            <div className={s.gallery} aria-live="polite">
              {itemsWithPos.map((item) => (
                <ResponsiveImage
                  key={item.id}
                  name={`services/${item.label}`}
                  alt={item.label}
                  preset="card"
                  className={`${s.galleryItem} ${item.cls}`}
                />
              ))}
            </div>

            {/* SLIDER CONTROLES */}
            <div className={s.servicesSliders}>
              <div className={s.sliderBtns}>
                <ol className={s.dots} aria-label="Progreso del carrusel">
                  {servicesList.map((_, i) => {
                    const isActive = i === active;
                    return (
                      <li key={i} role="listitem">
                        <span
                          aria-current={isActive ? "true" : undefined}
                          className={`${s.dot} ${isActive ? s.dotActive : ""}`}
                        />
                      </li>
                    );
                  })}
                </ol>
                <div className={s.btns}>
                  <button
                    className={`${s.chevronBtn} ${s.chevronLeft}`}
                    title="previous"
                    aria-label="previous"
                    onClick={prev}
                  >
                    <ChevronIcon />
                  </button>
                  <button
                    className={`${s.chevronBtn} ${s.chevronRight}`}
                    title="next"
                    aria-label="next"
                    onClick={next}
                  >
                    <ChevronIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
