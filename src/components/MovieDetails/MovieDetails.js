import './MovieDetails.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header.js'

const GetMovieId = ({ selectedMovieId }) => {
const [movie, setMovie] = useState(null);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${selectedMovieId}`);
      const data = await response.json();
      setMovie(data.movie);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, [selectedMovieId]);
        console.log("hello", movie)
        //movie.genre.forEach(genre
  if (!movie) return (<h1>Error Loading...</h1>);
  return (
    <div className="movie-details-container">
      <div className="backdrop">
        <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      </div>
      <div className="individual-movie">
        <h2>{movie.title}</h2>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres}</p>
        <p><strong></strong>Run Time: {movie.runtime}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Average Rating:</strong> {movie.average_rating}</p>
      </div>
    </div>
  );
};

export default GetMovieId;