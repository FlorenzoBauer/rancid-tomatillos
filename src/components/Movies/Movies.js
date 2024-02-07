import Card from '../Card/Card';

const Movies = ({ movies, handleCardClick, error }) => {
    if (error) {
        return <h1>Error: {error}</h1>;
    }
    if (!movies || movies.length === 0) {
        return <h1>No movies available</h1>;
    }
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
