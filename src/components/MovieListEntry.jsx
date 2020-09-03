//import react
import React from 'react';


/**
 * MovieListEntry ought to take in props from MovieList and return them in a div
 */

 var MovieListEntry = function (props) {
   return (
     <div className='movie'>
       {props.movie.title}
       <button className='button'>Watched</button>
     </div>
   )
 }

//export MovieListEntry
export default MovieListEntry