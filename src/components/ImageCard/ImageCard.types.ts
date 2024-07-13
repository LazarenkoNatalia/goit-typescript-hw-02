import { PhotosType } from "../../api/apiUnsplash";

export interface ImageCardProps {
  onPhotosClick: () => void;
  card: PhotosType;
}
