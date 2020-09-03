import React from 'react'

var SearchBar = function (props) {
  return (
    <div>
    <input type='text' value={props.inputValue} onChange={(event) => props.changeHandler(event.target.value)} placeholder='Whats on?' />
    <button onClick={() => props.clickHandler()}>Submit</button>
    <button onClick={() => props.refreshHandler()}>Reset List</button>
    </div>
  )
}


export default SearchBar

