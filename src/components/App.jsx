import React from 'react';
//i want to import the example movie data from the data file, and set that object as the initial state of movies

//either in the render function or in the movieList component I'll iterate (map) over them and render them onto the page
import exampleMovies from '.../data/exampleMovies.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies
    }
  }





  render(){
    return(
    <div>
      Lets get it started in here
    </div>
  )}
}

export default App;
