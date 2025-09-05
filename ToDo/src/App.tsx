import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setvalue] = useState([])

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Form submitted");
  }
  return (
    <div className="app">
      <div className="todoBox">
        <h1>ToDo List</h1>
        <form onSubmit={submitForm}>
          <input type="text" name="name" placeholder="Add your new todo" />
          <button type="submit">Add</button>
          <ItemsList />
        </form>
      </div>
    </div>
  );
}

export default App;


const ItemsList = () => {
  return (
    <div>
      <ul>
        <li>Item 1 <button>Delete</button></li>
        <li>Item 2 <button>Delete</button></li>
        <li>Item 3 <button>Delete</button></li>
      </ul>
    </div>
  )
}