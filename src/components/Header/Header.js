import './Header.css';

const Header = ({selectedMovieId, setSelectedMovieId}) => {
    return (
        <header className="title">
        <h1>Rancid Tomatillos</h1>
        {selectedMovieId ? (
            <button className="homeButton" onClick={() => setSelectedMovieId(null)}>Back to Movies</button>
        ) : null}
        </header>
    );
    }
export default Header;