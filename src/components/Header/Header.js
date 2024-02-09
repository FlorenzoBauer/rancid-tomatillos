import './Header.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ handleFilterChange, activeFilters }) => {
    return (
        <header className="title">
            <h1>Rancid Tomatillos</h1>
            <div className="rating-filters">
                <NavLink
                    to="#"
                    className="filter-button"
                    activeClassName="active"
                    onClick={() => handleFilterChange('low')}
                    isActive={() => activeFilters.low}
                >
                    Low Rated
                </NavLink>
                <NavLink
                    to="#"
                    className="filter-button"
                    activeClassName="active"
                    onClick={() => handleFilterChange('average')}
                    isActive={() => activeFilters.average}
                >
                    Average Rated
                </NavLink>
                <NavLink
                    to="#"
                    className="filter-button"
                    activeClassName="active"
                    onClick={() => handleFilterChange('high')}
                    isActive={() => activeFilters.high}
                >
                    High Rated
                </NavLink>
            </div>
        </header>
    );
}

Header.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    activeFilters: PropTypes.object.isRequired,
};

export default Header;