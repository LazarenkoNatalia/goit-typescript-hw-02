import { PhotosType } from "../../api/apiUnsplash";
export interface ImageGalleryProps {
  onPhotosClick: (src: string, alt: string) => void;
  cards: PhotosType[];
}