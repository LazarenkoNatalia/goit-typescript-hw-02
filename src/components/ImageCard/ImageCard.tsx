import stylImgCard from './ImageCard.module.css'
import { ImageCardProps } from './ImageCard.types'



export default function ImageCard({ card, onPhotosClick }: ImageCardProps) {
    return (
        <div className={stylImgCard.item}>
            <img
                 className={stylImgCard.shortCard} 
                src={card.urls.small}
                alt={card.alt_description}
                onClick={onPhotosClick}
            />   
                    <p className={stylImgCard.descr}>Autor photo  {card.user.name}</p>  
               
                    <p className={stylImgCard.descr}>Likes: {card.likes}</p>
        </div>
    );
}
