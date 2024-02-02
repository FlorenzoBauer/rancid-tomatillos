import './Movies.css';
import Card from '../Card/Card';

const Movies = ({ movies, handleCardClick }) => {
    return (
        <div className="movies-container">
            {movies.map(movie => (
                <Card
                    key={movie.id}
                    {...movie}
                    handleCardClick={() => handleCardClick(movie.id)}
                />
            ))}
        </div>
    );
};

export default Movies;
