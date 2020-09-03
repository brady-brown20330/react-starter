import React from 'react'

var SearchBar = function (props) {
  return (
    <div className="searchBar">
    <input type='text' value={props.inputValue} onChange={(event) => props.changeHandler(event.target.value)} placeholder='Whats on?' />
    <button className="button" onClick={() => props.clickHandler()}>Submit</button>
    <button className="button" onClick={() => props.refreshHandler()}>Reset List</button>
    </div>
  )
}


export default SearchBar

