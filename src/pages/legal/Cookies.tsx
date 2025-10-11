import s from "../../assets/styles/pages/terms.module.css";
import GradientButton from "../../components/GradientButton";

export default function Cookies() {
  const reopenBanner = () =>
    window.dispatchEvent(new Event("open-cookie-banner"));

  return (
    <main className={`${s.main} u--flex-column`}>
      <h3>Política de Cookies</h3>
      <p className="u--paragraph">Última actualización: 10/10/2025</p>

      <section>
        <h5>1. ¿Qué son?</h5>
        <p className="u--paragraph">
          Archivos que almacenan información para recordar tu visita. También
          usamos tecnologías similares.
        </p>
      </section>

      <section>
        <h5>2. Tipos usados</h5>
        <ul className="u--paragraph">
          <li>
            <strong>Técnicas</strong>: necesarias para el funcionamiento básico.
          </li>
          <li>
            <strong>Analíticas (opcionales)</strong>: Google Analytics 4 para
            medir uso y rendimiento.
          </li>
        </ul>
      </section>

      <section>
        <h5>3. ¿Quién las instala?</h5>
        <ul className="u--paragraph">
          <li>
            <strong>Propias</strong>: de este dominio (técnicas).
          </li>
          <li>
            <strong>Terceros</strong>: Google (Analytics). Más info en su{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noreferrer noopener"
              className={s.link}
            >
              política de cookies
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h5>4. Gestión y revocación</h5>
        <p className="u--paragraph">
          Puedes aceptar o rechazar en el banner inicial y{" "}
          <strong>modificar tu elección</strong> en cualquier momento.
        </p>
        <GradientButton
          onClick={reopenBanner}
          text="Cambiar preferencias de cookies"
          variant="dark"
        />
      </section>

      <section>
        <h5>5. Detalle orientativo (GA4)</h5>
        <p className="u--paragraph">
          GA4 puede usar identificadores como <em>_ga</em> y otros de
          sesión/eventos. La IP se anonimiza.
        </p>
      </section>
    </main>
  );
}
