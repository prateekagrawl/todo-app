import React, {useState} from 'react'
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editID, setEditID] = useState(0); //returns id of clicked item

  const handleSubmit =(e) =>{
    e.preventDefault();  //prevents reloading of the page
    //if todo is not empty, append it to the array
    if(todo!==''){
      setTodos( [ ...todos, { id: `${todo}-${Date.now()}`,todo}]);

      setTodo("");
    }
  }

  //returns list after deleting a particular value
  const handleDelete = (id) =>{
    const filteredList= todos.filter((t) => t.id!== id);
    setTodos([...filteredList]);
  }
  

  const handleEdit = (id) =>{
    const editTodo= todos.find((i) => i.id ===id) //returns the object with id and todo which we have clicked upon
    setTodo(editTodo.todo);
    setEditID(id);
  }


  return (
    <div className="App">
      <div className="container">
        <h1> Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo}></input>
          <button type="submit">{editID ? "Edit" : "Go" }</button>
        </form>

        <ul className="allTodos">
          {  todos.map((t) => (
             <li className="singleTodo">
             <span className="todoText" key={t.id}>{t.todo}</span>
             <button onClick={() => handleEdit(t.id)}>Edit</button>
             <button onClick={()=> handleDelete(t.id)}>Delete</button>
             </li>
          ))           
          }
        </ul>
      </div>
    </div>
  )
}

export default App
