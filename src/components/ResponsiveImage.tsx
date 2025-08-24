import {
  IMAGE_DIR,
  IMAGE_SIZES,
  IMAGE_PRESETS,
  makeSrcSet,
  type ImagePresetName,
} from "../config/images";

type ResponsiveImageProps = {
  name: string; // base sin extensión, p.ej. "headers/home-"
  alt: string;
  preset: ImagePresetName; // "header" | "card" | "thumb"
  className?: string;
  priority?: boolean;
};

export default function ResponsiveImage({
  name,
  alt,
  preset,
  className,
  priority = false,
}: ResponsiveImageProps) {
  const widths = IMAGE_PRESETS[preset] as number[];
  const sizes = IMAGE_SIZES[preset];
  const largest = widths[widths.length - 1];

  return (
    <picture className={className}>
      <source
        srcSet={makeSrcSet(name, "avif", widths, IMAGE_DIR)}
        type="image/avif"
        sizes={sizes}
      />
      <source
        srcSet={makeSrcSet(name, "webp", widths, IMAGE_DIR)}
        type="image/webp"
        sizes={sizes}
      />
      <img
        src={`${IMAGE_DIR}/${name}${largest}.jpg`}
        srcSet={makeSrcSet(name, "jpg", widths, IMAGE_DIR)}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
