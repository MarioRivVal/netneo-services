import s from "../../assets/styles/pages/terms.module.css";
import GradientButton from "../../components/GradientButton";

export default function Privacy() {
  const reopenBanner = () =>
    window.dispatchEvent(new Event("open-cookie-banner"));

  return (
    <main className={`${s.main} u--flex-column`}>
      <h3>Política de Privacidad</h3>
      <p className="u--paragraph">Última actualización: 10/10/2025</p>

      <section>
        <h5>1. Responsable</h5>
        <p className="u--paragraph">
          <strong>Titular:</strong> Mario Valverde Rivera •
          <strong> Dirección:</strong> Julio Alvarez Mendo - Oviedo •
          <strong> Email:</strong> info@netneo.es
        </p>
      </section>

      <section>
        <h5>2. Datos tratados</h5>
        <p className="u--paragraph">
          No recogemos datos personales mediante formularios. Usamos Google
          Analytics 4 para estadísticas de uso. Se tratan identificadores de
          dispositivo, páginas visitadas, eventos y la IP{" "}
          <strong>anonimizada</strong>.
        </p>
      </section>

      <section>
        <h5>3. Finalidad y base jurídica</h5>
        <p className="u--paragraph">
          Analizar tráfico y mejorar la experiencia. Base jurídica:{" "}
          <strong>consentimiento </strong>
          otorgado en el banner de cookies. Puedes retirarlo en cualquier
          momento.
        </p>
      </section>

      <section>
        <h5>4. Encargados y transferencias</h5>
        <p className="u--paragraph">
          Google Ireland Limited (Analytics). Consulta su{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer noopener"
          >
            política de privacidad
          </a>
          .
        </p>
      </section>

      <section>
        <h5>5. Conservación</h5>
        <p className="u--paragraph">
          Retención conforme a la configuración de GA4 (p. ej., 2–14 meses).
        </p>
      </section>

      <section>
        <h5>6. Derechos</h5>
        <p className="u--paragraph">
          Acceso, supresión, limitación u oposición escribiendo a
          info@netneo.es. Reclamación ante la AEPD.
        </p>
      </section>

      <section>
        <h5>7. Retirar o cambiar consentimiento</h5>
        <GradientButton
          onClick={reopenBanner}
          text="Cambiar preferencias de cookies"
          variant="dark"
        />
      </section>
    </main>
  );
}
