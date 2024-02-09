import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header.js';

function App() {
    const [originalMovies, setOriginalMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);
    let filter;
    const [activeFilters, setActiveFilters] = useState({
        low: false,
        average: false,
        high: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => {
                if (!response.ok) {
                    if(response.status === 500) {
                        throw new Error('Internal Server Error');
                    }
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setOriginalMovies(data.movies);
                setFilteredMovies(data.movies);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Error fetching data from the API');
            });
    }, []);

    const handleFilterChange = (selectedCategory) => {
        filter = selectedCategory
        setActiveFilters(prevFilters => ({
            ...prevFilters,
            [selectedCategory]: !prevFilters[selectedCategory]
        }));
    };
    
    useEffect(() => {
        const isMovieIncluded = (movie) => {
            const rating = movie.average_rating;
            if (activeFilters.low && rating <= 4) return true;
            if (activeFilters.average && rating > 4 && rating < 7) return true;
            if (activeFilters.high && rating >= 7) return true;
            return false;
        };
        
        const filteredMoviesList = activeFilters.low || activeFilters.average || activeFilters.high
        ? originalMovies.filter(isMovieIncluded)
        : originalMovies;
        
        setFilteredMovies(filteredMoviesList);
    }, [activeFilters, originalMovies]);
    
    const handleCardClick = (id) => {
        navigate(`/${id}`);
    };

    return (
        <main>
            <Header handleFilterChange={handleFilterChange} activeFilters={activeFilters} filter={filter} />
            <Routes>
                <Route path="/" element={<Movies movies={filteredMovies} handleCardClick={handleCardClick} error={error} />} />
                <Route path="/:movieId" element={<MovieDetails />} />
            </Routes>
        </main>
    );
}

export default App;