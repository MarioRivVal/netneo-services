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
};

export type PhraseBoxProps = {
  index: number;
};
