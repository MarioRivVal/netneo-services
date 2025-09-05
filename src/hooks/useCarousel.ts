// hooks/useCarousel.ts
import { useEffect, useRef, useState, useCallback } from "react";
import s from "../assets/styles/components/slider.module.css";

type Options = {
  initial?: number;
  onChange?: (index: number) => void;
};

export default function useCarousel(itemsLength: number, opts: Options = {}) {
  const clamp = (n: number, a: number, b: number) =>
    Math.max(a, Math.min(b, n));
  const initial = clamp(opts.initial ?? 2, 0, Math.max(0, itemsLength - 1));

  const [active, setActive] = useState(initial);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Ajustes
  const BASE_SHIFT = 150;
  const SCALE_STEP = 0.2;
  const CENTER_SCALE = 1.12;

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
      items[i].style.zIndex = String(BASE_Z - Math.round(abs * 10));
    }
  };

  // Recalcula al cambiar activo o tamaño
  useEffect(() => {
    loadShow();
    const onResize = () => loadShow();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, itemsLength]);

  // Notifica al padre cuando cambia el activo
  useEffect(() => {
    opts.onChange?.(active);
  }, [active, opts]);

  // Si cambia itemsLength, asegura que active sea válido
  useEffect(() => {
    setActive((i) => clamp(i, 0, Math.max(0, itemsLength - 1)));
  }, [itemsLength]);

  const next = useCallback(() => {
    setActive((i) => (i + 1 < itemsLength ? i + 1 : i));
  }, [itemsLength]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 >= 0 ? i - 1 : i));
  }, []);

  // Swipe
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const THRESH = 40;
    let down = false;
    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let horiz = false;
    let pid = 0;

    const controller = new AbortController();
    const { signal } = controller;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
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

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      dx = e.clientX - startX;
      dy = e.clientY - startY;

      if (!horiz && Math.abs(dx) > Math.abs(dy) + 6) {
        horiz = true;
        el.classList.add(s.locking);
      }
      if (horiz && e.cancelable) e.preventDefault();
      window.getSelection?.()?.removeAllRanges();
    };

    const onUp = () => {
      if (!down) return;
      el.classList.remove(s.dragging, s.locking);
      if (horiz && Math.abs(dx) > THRESH) {
        if (dx < 0) next();
        else prev();
      }
      down = false;
      horiz = false;
    };

    el.addEventListener("pointerdown", onDown, { passive: false, signal });
    el.addEventListener("pointermove", onMove, { passive: false, signal });
    window.addEventListener("pointerup", onUp, { passive: true, signal });
    window.addEventListener("pointercancel", onUp, { passive: true, signal });
    window.addEventListener("pointerleave", onUp, { passive: true, signal });

    return () => controller.abort();
  }, [next, prev]);

  return { sliderRef, itemRefs, active, setActive, next, prev };
}
