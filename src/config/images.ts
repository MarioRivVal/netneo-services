export const IMAGE_DIR = "/images";

export const IMAGE_PRESETS = {
  header: [480, 768, 1200, 1600],
  card: [320, 480, 640, 800],
  thumb: [150, 300],
} as const;

export type ImagePresetName = keyof typeof IMAGE_PRESETS;

export const IMAGE_SIZES = {
  header: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1600px",
  card: "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw",
  thumb: "(max-width: 640px) 150px, 300px",
} as const;

export function makeSrcSet(
  name: string,
  ext: "avif" | "webp" | "jpg",
  widths: number[],
  dir: string = IMAGE_DIR
): string {
  return widths.map((w) => `${dir}/${name}${w}.${ext} ${w}w`).join(", ");
}
