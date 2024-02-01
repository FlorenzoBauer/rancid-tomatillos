import './Movies.css';
import Card from '../Card/Card';


const Movies = ({movies}) => {
    const movieCards = movies.map(movie => {

        return (
            <Card
            title={movie.title}
            poster_path={movie.poster_path}
            />
        )
    });



   return(
    <div className="movies-container"> 
        {movieCards}
    </div>
   )

}
export default Movies;