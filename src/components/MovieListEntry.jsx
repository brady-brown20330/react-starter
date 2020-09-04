//import react
import React from 'react';
//import App?
import App from './App.jsx'

/**
 * MovieListEntry ought to take in props from MovieList and return them in a div
 */

//  var MovieListEntry = function (props) {
//    return (
//      <div className='movie'>
//        {props.movie.title}
//    <button class='watchButton'>inputText</button>
//      </div>
//    )
//  }

 class MovieListEntry extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       //should this be a boolean or actual text?
       watched: false,
     }
   }

   //function should handle the click action on watched button; and toggle between watched and unwatched
   watchedToggler() {
      if (this.state.watched === false) {
        this.setState({
          watched: true,
        })
      } else {
        this.setState({
          watched: false,
        })
      }
   }

   render(props) {
     return (
    <div className='movie'>
       {this.props.movie.title}
     <button className={this.state.watched ? 'greenButton' : 'geryButton'} onClick={() => this.watchedToggler()}>Seen it?</button>
    </div>
  )
   }
 }

//export MovieListEntry
export default MovieListEntry