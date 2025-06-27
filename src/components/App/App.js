import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';

function App() {
    const [originalMovies, setOriginalMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);
    const [activeFilters, setActiveFilters] = useState({
        low: false,
        average: false,
        high: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rancid-tomatillos-server-544508eefb00.herokuapp.com/movies`)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 500) {
                        throw new Error('Internal Server Error');
                    }
                    if (response.status === 304 || response.status === 404) {
                        throw new Error('Not Found');
                    }
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('API response data:', data); 
                if (!data || !Array.isArray(data)) {
                    throw new Error('Movies data is missing or invalid');
                }
                setOriginalMovies(data);
                setFilteredMovies(data);
            })
            .catch(error => {
                console.error('Error:', error);
                if (error.message === 'Internal Server Error') {
                    setError('Internal Server Error: The server encountered an unexpected condition which prevented it from fulfilling the request.');
                } else {
                    setError('Error fetching data from the API');
                }
            });
    }, []);

    const handleFilterChange = (selectedCategory) => {
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

    console.log('Original Movies:', originalMovies);
    console.log('Filtered Movies:', filteredMovies);
    console.log('Active Filters:', activeFilters);

    return (
        <main>
            <Header handleFilterChange={handleFilterChange} activeFilters={activeFilters} />
            {error && <div className="error-message">{error}</div>}
            <Routes>
                <Route path="/rancid-tomatillos/" element={<Movies movies={filteredMovies} handleCardClick={handleCardClick} error={error} />} />
                <Route path="/:movieId" element={<MovieDetails />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}

export default App;
