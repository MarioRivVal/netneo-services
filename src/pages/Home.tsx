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

  // Índice activo (0-based). Empiezo en 2 para que "app" quede al centro (galleryItem3).
  const [active, setActive] = useState(2);

  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);
  const goTo = (i: number) => setActive(((i % count) + count) % count);

  // Mapea distancia relativa -> clase de posición (para 5 posiciones)
  const posClass = (rel: number) => {
    // rel = (index - active + count) % count
    // 0: centro, 1/2 derecha, count-1/count-2 izquierda
    if (rel === 0) return s.galleryItem3;
    if (rel === 1) return s.galleryItem4;
    if (rel === 2) return s.galleryItem5;
    if (rel === count - 1) return s.galleryItem2;
    if (rel === count - 2) return s.galleryItem1;
    return ""; // fuera de las 5 posiciones visibles (por si hay más elementos)
  };

  // Para no recalcular en cada render (opcional)
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
            {/* TOP TABS / SERVICES LIST */}
            <ul
              className={s.servicesList}
              role="tablist"
              aria-label="Servicios"
            >
              {servicesList.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={item.id}
                    className={`${s.service} ${
                      isActive ? s.serviceActive : ""
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goTo(i)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") goTo(i);
                      if (e.key === "ArrowRight") next();
                      if (e.key === "ArrowLeft") prev();
                    }}
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

            {/* SLIDER CONTROLS */}
            <div className={s.servicesSliders}>
              <div className={s.sliderBtns}>
                <ol
                  className={s.dots}
                  role="tablist"
                  aria-label="Ir a servicio"
                >
                  {servicesList.map((_, i) => {
                    const isActive = i === active;
                    return (
                      <li key={i} role="presentation">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-label={`Ir a ${servicesList[i].label}`}
                          className={`${s.dot} ${isActive ? s.dotActive : ""}`}
                          onClick={() => goTo(i)}
                          onKeyDown={(e) => {
                            if (e.key === "ArrowRight") next();
                            if (e.key === "ArrowLeft") prev();
                          }}
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
