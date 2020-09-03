/*
MovieList component that:

-should be functional
-should contain everything to do with displaying the hardcoded movie data from exampleMovies.js


*/
import React from 'react';
import MovieListEntry from './MovieListEntry'

function MovieList(props) {
//  console.log(props.movies)
 return (
 <div>
   {console.log(props)}
   {props.movies.map((movie, index) =>(
   <MovieListEntry movie={movie} key={index}/>
   ))}
 </div>
 )
}


export default MovieList