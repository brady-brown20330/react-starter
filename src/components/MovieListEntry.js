import React from 'react';

var MovieListEntry = function (props) {
  return (
    <div className="movie">
      {props.movie.title}
    </div>
  )
}

export default MovieListEntry;