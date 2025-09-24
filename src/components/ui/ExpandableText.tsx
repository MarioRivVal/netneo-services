import { useEffect, useRef, useState } from "react";

type ExpandableTextProps = {
  text: string;
  lines?: number; // líneas visibles cuando está colapsado
  className?: string; // para aplicar tu .reasonParagraph
  moreLabel?: string;
  lessLabel?: string;
};

export default function ExpandableText({
  text,
  lines = 4,
  className,
  moreLabel = "Más",
  lessLabel = "Menos",
}: ExpandableTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [clampNeeded, setClampNeeded] = useState(false);

  useEffect(() => {
    // tras pintar, comprobamos si hay overflow para decidir si mostramos el botón
    const el = ref.current;
    if (!el) return;
    // Forzamos el estado colapsado para medir correctamente
    el.style.display = "-webkit-box";
    el.style.webkitLineClamp = String(lines);
    el.style.webkitBoxOrient = "vertical";
    el.style.overflow = "hidden";
    requestAnimationFrame(() => {
      setClampNeeded(el.scrollHeight > el.clientHeight + 1);
    });
  }, [text, lines]);

  return (
    <div
      className={className ? `${className} __exp-wrap` : "__exp-wrap"}
      data-expanded={expanded ? "1" : "0"}
      style={{ position: "relative" }}
    >
      <p
        ref={ref}
        className="__exp-text"
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: lines,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }
        }
      >
        {text}
      </p>

      {/* degradado al final solo cuando está colapsado y hay overflow */}
      {!expanded && clampNeeded && <span className="__exp-fade" aria-hidden />}

      {clampNeeded && (
        <button
          type="button"
          className="__exp-btn"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
