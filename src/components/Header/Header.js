import './Header.css';
import { useNavigate, useMatch } from 'react-router-dom';

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