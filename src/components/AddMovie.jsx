import React from 'react'
import App from './App.jsx'
var AddMovie = function (props) {
return (
  <div>
  <input type='text' value={props.newMovieInput} onChange={(event) => props.changeHandler(event.target.value)} placeholder='Have something you want added?' />
  <button onClick={() => props.clickHandler()}>Add Movie</button>
  </div>
)
}

export default AddMovie