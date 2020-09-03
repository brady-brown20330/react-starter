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
//import searchBar
import SearchBar from './SearchBar.js'
//import CSS somehow?
import  '../main.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: exampleMovies,
      inputValue: '',
    }
  }

  searchBarChangeHandler(term) {
    this.setState({
      inputValue: term
    }, console.log('input value is: ', this.state.inputValue));

  }

  searchButtonClick() {
    console.log(this.state.inputValue)
    this.setState({})
    this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.inputValue.toLowerCase)
    });
    }

  render() {
    return (
    <div>
      <div>
        <SearchBar inputValue={this.state.inputValue} changeHandler={this.searchBarChangeHandler.bind(this)} clickHandler={this.searchButtonClick.bind(this)}/>
      </div>

    <div>
      <MovieList movies={this.state.movies}/>
    </div>
  </div>
    )
  }
}


//export app
export default App
