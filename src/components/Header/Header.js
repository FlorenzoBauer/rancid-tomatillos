import React, { useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ handleFilterChange, activeFilters }) => {
    const [activeButtons, setActiveButtons] = useState([]);

    const handleButtonClick = (filterType) => {
        // Toggle the active state of the button
        const updatedButtons = [...activeButtons];
        const index = updatedButtons.indexOf(filterType);

        if (index === -1) {
            // Button not in the active list, add it
            updatedButtons.push(filterType);
        } else {
            // Button already in the active list, remove it
            updatedButtons.splice(index, 1);
        }
        setActiveButtons(updatedButtons);

        // Determine whether to filter or unfilter based on the current active state
        const isActive = updatedButtons.includes(filterType);
        handleFilterChange(isActive ? updatedButtons : null);
    };

    return (
        <header className="title">
            <h1>Rancid Tomatillos</h1>
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
        </header>
    );
};

Header.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    activeFilters: PropTypes.object.isRequired,
};

export default Header;
