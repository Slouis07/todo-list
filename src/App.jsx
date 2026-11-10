import { useState } from "react";
import "./App.css";
import TodoList from "./features/TodoList";
import TodoForm from "./features/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false,
    };

    setTodoList((previous) => [newTodo, ...previous]);
  }

  function completeTodo(id) {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo,
    );

    setTodoList(updatedTodoList);
  }

  function updateTodo(editedTodo) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === editedTodo.id ? { ...todo, ...editedTodo } : todo,
    );

    setTodoList(updatedTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
