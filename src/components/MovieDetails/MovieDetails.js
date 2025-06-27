import './MovieDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faStar, faFilm } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieUrl = `https://e299-2601-283-4f02-1db0-7c9f-ed26-e7d9-264d.ngrok-free.app/movies/${movieId}`; // Change this to the correct URL if needed
        

        const [movieResponse] = await Promise.all([
          fetch(movieUrl),
        ]);

        if (!movieResponse.ok) {
          throw new Error('Movie not found');
        }

        const movieData = await movieResponse.json();

        setMovie(movieData);
      } catch (error) {
        setError('Movie not found');
      }
    };

    fetchData();
  }, [movieId]);
console.log('Movie Details:', movie); // Debug log to check movie data
  if (error) {
    return <NotFoundPage />;
  }

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details-container">
      <div className="backdrop">
        <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      </div>
      <div className="individual-movie">
        <h2>{movie.title}</h2>
        <p>
          <FontAwesomeIcon icon={faFilm} /> <strong>Genres:</strong> {movie.genre}
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} /> <strong>Run Time:</strong> {movie.runtime} minutes
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Release Year:</strong> {movie.release_date.slice(0,  4)}
        </p>
        <p>
          <FontAwesomeIcon icon={faStar} /> <strong>Average Rating:</strong> {movie.average_rating}
        </p>
        <p>
          <strong>Overview:</strong> <br></br>{movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;