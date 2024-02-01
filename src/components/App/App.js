import './App.css';
import  { useState } from 'react';
import  { movieData } from '../../mockData';
import Movies from '../Movies/Movies.js'


function App() {
  
const [ movies, setMovies ] = useState(movieData.movies)
console.log(movies);

return (
    <main>
    <Movies movies={movies}/>
    </main>
)} 

export default App;
