import './Header.css';
import { useNavigate, useMatch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Header = ({ onReset }) => {
    const navigate = useNavigate();
    const isMovieDetailsPage = useMatch("/:movieId");

    return (
        <header className="title">
            <h1>Rancid Tomatillos</h1>
            {isMovieDetailsPage && (
                <button className="homeButton" onClick={() => {
                    navigate('/');
                    onReset();
                }}>Back to Movies</button>
            )}
        </header>
    );
}

export default Header;


Header.propTypes = {
    onReset: PropTypes.func.isRequired,
  };