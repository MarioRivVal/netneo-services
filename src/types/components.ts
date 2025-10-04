import type { ReactNode } from "react";
import type { ImgItemsProps } from "./objects";

export type SliderTextBoxProps = {
  scope: string;
  directory: string;
  initialIndex: number;
};

export type SliderImgBoxProps = {
  sliderRef: React.RefObject<HTMLDivElement>;
  itemRef: React.RefObject<(HTMLDivElement | null)[]>;
  items: ImgItemsProps[];
  stats?: boolean;
  activeIndex?: number;
};

export type PhraseBoxProps = {
  index: number;
};

export type GradientButtonProps = {
  text: string;
  to?: string; // interno o archivo/externo
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
  variant?: "dark" | "light";
  className?: string;
};

export type SmallButtonProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  title?: string;
  Icon?: ReactNode;
};

export type ResponsiveImageProps = {
  name: string;
  alt: string;
  className?: string;
  ext?: string;
  priority?: boolean;
};
