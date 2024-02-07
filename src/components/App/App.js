import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header.js';

function App() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMovies(data.movies))
            .catch(error => {
                console.error('Error:', error);
                setError('Error fetching data from the API');
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/${id}`);
    };

    return (
        <main>
            <Header onReset={() => {}} />
            <Routes>
                <Route path="/" element={<Movies movies={movies} handleCardClick={handleCardClick} error={error} />} />
                <Route path="/:movieId" element={<MovieDetails />} />
            </Routes>
        </main>
    );
}

export default App;