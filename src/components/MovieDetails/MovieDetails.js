import './MovieDetails.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faStar, faFilm } from '@fortawesome/free-solid-svg-icons';

const GetMovieId = ({ selectedMovieId }) => {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieUrl = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${selectedMovieId}`;
        const videosUrl = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${selectedMovieId}/videos`;

        const [movieResponse, videosResponse] = await Promise.all([
          fetch(movieUrl),
          fetch(videosUrl),
        ]);

        const movieData = await movieResponse.json();
        const videosData = await videosResponse.json();

        setMovie(movieData.movie);
        setVideos(videosData.videos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedMovieId]);


  if (!movie) return (<h1>Error Loading...</h1>);
  return (
    <div className="movie-details-container">
      <div className="backdrop">
        <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      </div>
      <div className="individual-movie">
        <h2>{movie.title}</h2>
        <p>
        <FontAwesomeIcon icon={faFilm} /> <strong>Genres:</strong> {movie.genres.join(', ')}
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} /> <strong>Run Time:</strong> {movie.runtime} minutes
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Release Year:</strong> {new Date(movie.release_date).getFullYear()}
        </p>
        <p>
          <FontAwesomeIcon icon={faStar} /> <strong>Average Rating:</strong> {movie.average_rating}
        </p>
        <p>
          <strong>Overview:</strong> <br></br>{movie.overview}
        </p>
        <p><strong>Videos:</strong> </p>
        <div className="movie-videos">
          {videos.map(video => (
            <div key={video.id}>
              <h3>{video.name}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default GetMovieId;
