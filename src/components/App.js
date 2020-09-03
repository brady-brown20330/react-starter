/**
 * App will be the 'superclass', and will be written as the only class component for part 0
 * It should have a constructor and a super that take in props
 * It should have a state with a movies prop that will take in info from exampleMovies.js
 * Finally it should have a resnder method that will pass down the properties from the state to MovieList
 */
//import react.js
import React from 'react'
//import MovieList.js
import MovieList from './MovieList.js'
//import exampleMovies.js
import exampleMovies from '../Data/exampleMovies.js'
//import CSS somehow?
import  '../main.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: exampleMovies,
    }
  }

  render() {
    return (
    <div>
      <MovieList movies={this.state.movies}/>
    </div>
    )
  }
}


//export app
export default App
