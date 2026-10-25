import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const todos = [
  { id: 1, title: "Study React" },
  { id: 2, title: "Study some Python too" },
  { id: 3, title: "Review notes and do active recall" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>Todo List</h1> 
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;