import './Card.css';
import { findMovie } from '../MovieDetails/MovieDetails.js';

const Card = ({ id, poster_path, title, handleCardClick }) => {
    return (
        <div className='card' data-id={id} onClick={() => handleCardClick(id)}>
            <img src={poster_path} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
