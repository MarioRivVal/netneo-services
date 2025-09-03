import { useEffect, useRef, useState, useCallback } from "react";
import s from "../assets/styles/main.module.css";

export default function useCarousel(itemsLength: number) {
  const [active, setActive] = useState(
    Math.min(2, Math.max(0, itemsLength - 1))
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Ajustes finos (tócalos a tu gusto)
  const BASE_SHIFT = 150; // separación lateral en px
  const SCALE_STEP = 0.2; // cuánto baja el scale por paso desde el centro
  const CENTER_SCALE = 1.12; // escala del activo (centro)

  const clamp = (n: number, a: number, b: number) =>
    Math.max(a, Math.min(b, n));

  const loadShow = () => {
    const items = itemRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    if (!items.length) return;

    const a = clamp(active, 0, items.length - 1);
    const BASE_Z = 1000;

    for (let i = 0; i < items.length; i++) {
      const d = i - a;
      const abs = Math.abs(d);
      const x = BASE_SHIFT * d;
      const scale = clamp(CENTER_SCALE - SCALE_STEP * abs, 0.82, CENTER_SCALE);

      items[i].style.transform = `
        translate(-50%, -50%)
        translateX(${x}px)
        scale(${scale})
      `;
      // siempre positivo; redondeado para evitar valores decimales
      items[i].style.zIndex = String(BASE_Z - Math.round(abs * 10));
    }
  };

  useEffect(() => {
    loadShow();
    const onResize = () => loadShow();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, itemsLength]);

  const next = useCallback(() => {
    setActive((i) => (i + 1 < itemsLength ? i + 1 : i));
  }, [itemsLength]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 >= 0 ? i - 1 : i));
  }, []);

  // ----- Swipe (Android/desktop friendly): decide prev/next al soltar -----
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const THRESH = 40; // px para considerar swipe
    let down = false;
    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let horiz = false;
    let pid = 0;

    const controller = new AbortController();
    const { signal } = controller;

    const onDown = (e: PointerEvent): void => {
      if (e.pointerType === "mouse" && e.button !== 0) return; // solo botón izq en mouse
      down = true;
      startX = e.clientX;
      startY = e.clientY;
      dx = 0;
      dy = 0;
      horiz = false;
      pid = e.pointerId;
      el.setPointerCapture(pid);
      el.classList.add(s.dragging);
    };

    const onMove = (e: PointerEvent): void => {
      if (!down) return;

      dx = e.clientX - startX;
      dy = e.clientY - startY;

      // bloqueo de eje: cuando es mayormente horizontal, bloqueamos pan nativo
      if (!horiz && Math.abs(dx) > Math.abs(dy) + 6) {
        horiz = true;
        el.classList.add(s.locking); // activa touch-action:none mediante CSS
      }

      // En Android real, evitar que el navegador se quede el gesto
      if (horiz && e.cancelable) e.preventDefault();

      // evita selección de texto mientras arrastras
      window.getSelection?.()?.removeAllRanges();
    };

    const onUp = (): void => {
      if (!down) return;
      el.classList.remove(s.dragging, s.locking);

      if (horiz && Math.abs(dx) > THRESH) {
        if (dx < 0) next();
        else prev();
      }

      down = false;
      horiz = false;
    };

    // IMPORTANTE: pointermove/keydown con passive:false para poder preventDefault
    el.addEventListener("pointerdown", onDown, { passive: false, signal });
    el.addEventListener("pointermove", onMove, { passive: false, signal });
    window.addEventListener("pointerup", onUp, { passive: true, signal });
    window.addEventListener("pointercancel", onUp, { passive: true, signal });
    window.addEventListener("pointerleave", onUp, { passive: true, signal });

    return () => controller.abort();
  }, [next, prev]); // next/prev son estables (setters funcionales)

  return { sliderRef, itemRefs };
}
