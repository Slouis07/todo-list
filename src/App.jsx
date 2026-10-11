import "./App.css";

function App() {
  const todoList = [
    { id: 1, title: "Study React" },
    { id: 2, title: "Study some Python too" },
    { id: 3, title: "Review notes and do active recall" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
