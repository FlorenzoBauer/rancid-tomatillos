import './Card.css';
import { PropTypes } from 'prop-types';

const Card = ({ id, poster_path, title, handleCardClick }) => {
    return (
        <div className='card' data-id={id} onClick={() => handleCardClick(id)}>
            <img src={poster_path} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;

// Card.defaultProps = {
//     id:  0,
//     poster_path: 'default-poster-path.jpg',
//     title: 'Loading...',
// };

Card.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func.isRequired,
  };
