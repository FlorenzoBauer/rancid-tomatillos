import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import GetMovieId from '../MovieDetails/MovieDetails';
import Header from '../Header/Header.js';

function App() {
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => response.json())
            .then(data => setMovies(data.movies));
    }, []);
    
    console.log(movies)
    const handleCardClick = (id) => {
        navigate(`/${id}`)
    };
    
    return (
        <main>
            <Header onReset={() => {}}/>
            <Routes>
                <Route path="/" element={<Movies movies={movies} handleCardClick={handleCardClick} />} />
                <Route path="/:movieId" element={<GetMovieId />} />
            </Routes>
           
        </main>
    );
}

export default App;
