import s from "../assets/styles/layouts/main.module.css";
import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import useScramble from "../hooks/useScramble";

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
      <aside className={s.aside}></aside>
    </main>
  );
}
