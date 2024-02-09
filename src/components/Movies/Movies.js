import React, { useState, useEffect } from 'react';
import './Movies.css';
import Card from '../Card/Card';
import { PropTypes } from 'prop-types';

const Movies = ({ movies, handleCardClick, error }) => {
  
    if (error || !movies) {
        return <h1>Error: {error}</h1>;
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

Movies.propTypes = {
    // movies: PropTypes.array.isRequired,
    handleCardClick: PropTypes.func.isRequired,
  };
  