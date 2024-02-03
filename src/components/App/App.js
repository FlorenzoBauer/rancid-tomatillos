import './App.css';
import React, { useState, useEffect } from 'react';
import Movies from '../Movies/Movies';
import GetMovieId from '../MovieDetails/MovieDetails';
import Header from '../Header/Header.js';

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    
    useEffect(() => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => response.json())
            .then(data => setMovies(data.movies));
    }, []);
    console.log(movies)
    const handleCardClick = (id) => {
        setSelectedMovieId(id);
    };

    return (
        <main>
            <Header setSelectedMovieId={setSelectedMovieId} selectedMovieId={selectedMovieId}/>
            {selectedMovieId ? (
                <GetMovieId movies={movies} selectedMovieId={selectedMovieId} />
            ) : (
                <Movies movies={movies} handleCardClick={handleCardClick} />
            )}
        </main>
    );
}

export default App;
