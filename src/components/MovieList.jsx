/*
MovieList should take in props from the App
It should be written as a functional component
it should call map on the props passed down from App and call MovieListEntry on each movie
It should return that in a div i think
*/

//import react
import React from 'react'
//import movieListEntry
import MovieListEntry from './MovieListEntry.jsx'

var MovieList = function(props) {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <MovieListEntry movie={movie} key={index} />
      ))}
    </div>
  )
}

//export MovieList
export default MovieList