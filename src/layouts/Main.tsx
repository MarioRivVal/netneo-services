import s from "../assets/styles/layouts/main.module.css";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Main() {
  return (
    <main className={s.main}>
      <header className={s.header}>
        <h6>// Home_</h6>
        <div className={s.titles}>
          <h5>¿Quieres ser más visible?</h5>
          <h2>Aumenta tu presencia</h2>
        </div>
        <ResponsiveImage
          name="headers/home"
          alt="Mano con telefono en la mano"
          priority
          className={s.headerImg}
        />
      </header>
      <aside className={s.aside}></aside>
    </main>
  );
}
