import s from "../assets/styles/layouts/footer.module.css";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";
import GradientButton from "../components/gradientButton";
import NetneoIcon from "../icons/NetneoIcon";
import TextIcon from "../icons/TextIcon";
import SmallButton from "../components/smallButton";

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
          <GradientButton text="WhatsApp" variant="dark" />
        </div>
        <div className={s.footerContent}>
          <div className={s.logos}>
            <TextIcon />
            <NetneoIcon />
          </div>
          <div className={s.copyrights}>
            <div className={s.languages}>
              <SmallButton text="Esp" />
              <SmallButton text="Ita" />
              <SmallButton text="Eng" />
            </div>
            <a href="#">Términos y privacidad</a>
            <p>
              <span>@ 2025 Netneo</span>Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
