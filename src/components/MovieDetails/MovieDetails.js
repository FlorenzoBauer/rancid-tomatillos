import './MovieDetails.css'
import Header from '../Header/Header.js'

const GetMovieId = ({ movies, selectedMovieId }) => {
  const movie = movies.find(movie => movie.id === selectedMovieId);

  if (!movie) return null;

  return (
    <div className="movie-details-container">
      <div className="backdrop">
        <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      </div>
      <div className="individual-movie">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
        <p>{movie.average_rating}</p>
      </div>
    </div>
  );
};

export default GetMovieId;
