import s from "../assets/styles/layouts/footer.module.css";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";

// type FooterType ={
//     version: string
// }

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <h6>// Síguenos</h6>
        <div className={s.titleBox}>
          <div className={s.socials}>
            <InstagramIcon />
            <LinkedinIcon />
          </div>
          <h3>
            ¿Y si tu <span className="u--pink-text">idea</span> se convierte en
            el próximo caso de{" "}
            <span className="u--blue-text u--bold">exito</span>
          </h3>
        </div>
        <div className={s.cta}>
          <p>Habla con nosotros</p>
        </div>
      </div>
    </footer>
  );
}
