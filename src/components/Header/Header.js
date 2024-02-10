import React, { useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Header = ({ handleFilterChange, activeFilters }) => {
    const location = useLocation();
    const isMovieDetailPage = /\d+/.test(location.pathname);

    
    const [activeButtons, setActiveButtons] = useState(Object.keys(activeFilters).filter(key => activeFilters[key]));

    const handleButtonClick = (filterType) => {
     
        const updatedButtons = [...activeButtons];
        const index = updatedButtons.indexOf(filterType);

        if (index === -1) {

            updatedButtons.push(filterType);
        } else {
            updatedButtons.splice(index,   1);
        }
        setActiveButtons(updatedButtons);
        handleFilterChange(filterType);
    };

    return (
        <header className="header-container">
            <div className="title">
                <h1>Rancid Tomatillos</h1>
            </div>
            <div className="button-container">
                {isMovieDetailPage ? (
                    <button className="back-to-movies" onClick={() => window.history.back()}>
                        Back to Movies
                    </button>
                ) : (
                    <div className="rating-filters">
                        <button
                            className={`filter-button ${activeButtons.includes('low') ? 'active' : ''}`}
                            onClick={() => handleButtonClick('low')}
                        >
                            Low Rated
                        </button>
                        <button
                            className={`filter-button ${activeButtons.includes('average') ? 'active' : ''}`}
                            onClick={() => handleButtonClick('average')}
                        >
                            Average Rated
                        </button>
                        <button
                            className={`filter-button ${activeButtons.includes('high') ? 'active' : ''}`}
                            onClick={() => handleButtonClick('high')}
                        >
                            High Rated
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    activeFilters: PropTypes.object.isRequired,
};

export default Header;