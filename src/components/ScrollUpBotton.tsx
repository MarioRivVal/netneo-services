import { useEffect, useState } from "react";
import s from "../assets/styles/components/scrollUpButton.module.css";

import ArrowIcon from "../icons/ArrowIcon";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <button
        className={`${s.scrollTop} ${isVisible ? s.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ArrowIcon />
      </button>
    </>
  );
}
