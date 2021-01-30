import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1> Todo List App</h1>
        <form className="todoForm">
          <input type="text"></input>
          <button>Go</button>
        </form>

        <ul>
          <li>
          <span>Learn React</span>
          <button>Edit</button>
          <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
