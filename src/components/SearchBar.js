import React from 'react'

var SearchBar = function (props) {
  return (
    <div>
    <input type='text' value={props.inputValue} onChange={(event) => props.changeHandler(event.target.value)} placeholder='Whats on?' />
    <button onClick={() => props.clickHandler()}>
      <span>Submit</span>
    </button>
    <button onClick={() => props.refreshHandler()}>Refresh</button>
    </div>
  )
}


export default SearchBar

