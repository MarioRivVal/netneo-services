import type { ImgItemsProps } from "./objects";

export type UseGalleryImagesProps = {
  imgItems: ImgItemsProps[];
  directory: string;
  scope: string;
  initialIndex: number;
};

export type UseGalleryCardsProps = {
  directory: string;
  scope: string;
  initialIndex: number;
};
