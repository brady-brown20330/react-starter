import React from 'react';
//i want to import the example movie data from the data file, and set that object as the initial state of movies

//either in the render function or in the movieList component I'll iterate (map) over them and render them onto the page
import exampleMovies from '../Data/exampleMovies.js';
import MovieList from './MovieList.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies
    };
  }


  render(){
    return(
    <div>

      <MovieList movies={this.state.movies}/>
    </div>
  )}
}

export default App;
