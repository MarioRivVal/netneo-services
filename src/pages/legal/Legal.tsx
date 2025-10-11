import s from "../../assets/styles/pages/terms.module.css";

export default function Legal() {
  return (
    <main className={`${s.main} u--flex-column`}>
      <h3>Aviso legal</h3>
      <p className="u--paragraph">Última actualización: 10/10/2025</p>

      <section>
        <h5>1. Titular del sitio</h5>
        <p className="u--paragraph">
          <strong>Nombre:</strong> Mario Valverde Rivera
          <br />
          <strong>Domicilio:</strong> Julio Alarez Mendo - Oviedo •{" "}
          <strong>Email:</strong> info@netneo.es
        </p>
      </section>

      <section>
        <h5>2. Condiciones de uso</h5>
        <p className="u--paragraph">
          El acceso implica aceptación de estas condiciones. Uso diligente y
          conforme a la ley.
        </p>
      </section>

      <section>
        <h5>3. Propiedad intelectual</h5>
        <p className="u--paragraph">
          Salvo indicación, contenidos y diseños son del titular y están
          protegidos.
        </p>
      </section>

      <section>
        <h5>4. Limitación de responsabilidad</h5>
        <p className="u--paragraph">
          No nos responsabilizamos de decisiones tomadas a partir de la
          información ni de daños derivados del uso.
        </p>
      </section>

      <section>
        <h5>5. Enlaces</h5>
        <p className="u--paragraph">
          Puede haber enlaces a terceros, ajenos a nuestro control. No
          respondemos por sus contenidos o políticas.
        </p>
      </section>

      <section>
        <h5>6. Ley aplicable</h5>
        <p className="u--paragraph">
          Legislación española. Para controversias, juzgados del domicilio del
          usuario cuando corresponda.
        </p>
      </section>
    </main>
  );
}
