type ResponsiveImageProps = {
  name: string;
  alt: string;
  className?: string;
  ext?: string;
  priority?: boolean;
};

export default function ResponsiveImage({
  name,
  alt,
  className,
  ext = "png",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      <source srcSet={`/images/${name}.avif`} type="image/avif" />
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img
        src={`/images/${name}.${ext}`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
