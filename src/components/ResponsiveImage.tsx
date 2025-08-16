// components/ResponsiveImage.tsx
type ResponsiveImageProps = {
  /** nombre base de la imagen sin sufijo ni extensión, ej: "hero" */
  name: string;
  /** texto alternativo */
  alt: string;
  /** clases opcionales */
  className?: string;
  /**
   * si es imagen LCP/above-the-fold: eager + fetchPriority=high
   * por defecto false (lazy)
   */
  priority?: boolean;
  /**
   * sizes opcional por si tu layout no es el típico
   * default: móvil 100vw, tablet 80vw, desktop 1200px
   */
  sizes?: string;
};

const WIDTHS = [480, 768, 1200, 1600] as const;
const DIR = "/images/"; // cambia si prefieres otra carpeta

export default function ResponsiveImage({
  name,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",
}: ResponsiveImageProps) {
  const makeSrcSet = (ext: "avif" | "webp" | "jpg") =>
    WIDTHS.map((w) => `${DIR}/${name}${w}.${ext} ${w}w`).join(", ");

  const largest = WIDTHS[WIDTHS.length - 1];

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={makeSrcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={makeSrcSet("webp")} sizes={sizes} />
      <img
        src={`${DIR}/${name}${largest}.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        sizes={sizes}
        srcSet={makeSrcSet("jpg")}
      />
    </picture>
  );
}
