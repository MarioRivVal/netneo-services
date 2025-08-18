import s from "../assets/styles/layouts/main.module.css";
import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import useScramble from "../hooks/useScramble";
import GradientButton from "../components/gradientButton";

export default function Main() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Palabras y tiempos (simple):
  useScramble(titleRef, ["Webs", "Apps", "Diseño", "SEO", "IA"], {
    holdMs: 1200,
    fps: 30,
    loop: true,
  });

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h6>// Home_</h6>
        <div>
          <h5>¿Quieres ser más visible?</h5>
          <h2>Aumenta tu presencia</h2>
        </div>
        <div className={s.ImgBox}>
          <ResponsiveImage
            name="headers/home"
            alt="Mano con telefono en la mano"
            priority
            className={s.headerImg}
          />
          <div className={s.titleBox}>
            <h1 ref={titleRef} className={s.mainTitle}></h1>
          </div>
        </div>
      </header>
      <aside className={s.aside}>
        <h6>// Comencemos_</h6>
        <h3>
          Tu <span className="u--blue-text u--bold">presencia</span> digital{" "}
          <span className="u--pink-text">empieza</span> aqui.
        </h3>
        <div className={s.box}>
          <p className={s.paragraph}>
            En Netneo combinamos diseño, desarrollo e inteligencia artificial
            para crear experiencias digitales únicas. Webs, apps e ideas que
            funcionan, se ven bien y representan lo que tu marca es. Nada
            estándar, todo a tu medida
          </p>
          <div className={s.btnsBox}>
            <GradientButton text="Quiero mi web" variant="dark" />
            <GradientButton text="Quiero mi App" variant="light" />
          </div>
        </div>
      </aside>
    </main>
  );
}
