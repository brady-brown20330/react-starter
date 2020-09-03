/**
 * App will be the 'superclass', and will be written as the only class component for part 0
 * It should have a constructor and a super that take in props
 * It should have a state with a movies prop that will take in info from exampleMovies.js
 * Finally it should have a resnder method that will pass down the properties from the state to MovieList
 */
//import react.js
import React from 'react'
//import MovieList.js
import MovieList from './MovieList.jsx'
//import exampleMovies.js
import exampleMovies from '../Data/exampleMovies.js'
//import searchBar
import SearchBar from './SearchBar.jsx'
//import AddMovie
import AddMovie from './AddMovie.jsx'
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
  //detects changes to input in the main searchBar
  searchBarChangeHandler(term) {
    this.setState({
      inputValue: term
    }, console.log('input value is: ', this.state.inputValue));

  }
  //filters the movies prop based on what is in the input field above
  searchButtonClick() {
    console.log(this.state.inputValue)
    var filteredMovies = []
    this.state.movies.forEach(movie => {
      if (movie.title.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
      filteredMovies.push(movie)
      }
    })
    if (filteredMovies.length === 0) {
      //oops text very important
      var oopsText = [{title: "Sorry, we dont have that one. please refresh!"}]
      this.setState({
        movies: oopsText,
      })
    } else {
      this.setState({
      movies: filteredMovies,
    })
    }
    }
    //refreshes the page (WILL LIKELY DELETE ANY MOVIES ADDED BY USER)
    refreshButtonClick() {
      location.reload();
    }
  //render function that determines the display of everything
  render() {
    return (
    <div>
      <div>
        <SearchBar inputValue={this.state.inputValue} changeHandler={this.searchBarChangeHandler.bind(this)} clickHandler={this.searchButtonClick.bind(this)} refreshHandler={this.refreshButtonClick.bind(this)}/>
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