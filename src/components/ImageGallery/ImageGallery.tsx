import stylImgGallery from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

import {ImageGalleryProps} from './ImageGallery.types'


export default function ImageGallery({ cards, onPhotosClick }: ImageGalleryProps) {
    return (
        <ul className={stylImgGallery.container}>
            {cards.map(card => (
                <li key={card.id}>
                    <ImageCard
                        card={card}
                        onPhotosClick={() =>
                            onPhotosClick(card.urls.regular, card.alt_description)
                        }
                    />
                </li>
            ))}
        </ul>
    );
}
