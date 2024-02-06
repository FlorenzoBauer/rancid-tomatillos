import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = ({selectedMovieId, setSelectedMovieId}) => {
    const navigate = useNavigate();
    return (
        <header className="title">
            <h1>Rancid Tomatillos</h1>
            {selectedMovieId && (
                <button className="homeButton" onClick={() => {
                    navigate('/')
                    setSelectedMovieId(null)
                }}>Back to Movies</button>
            )}
        </header>
    );
}

export default Header;