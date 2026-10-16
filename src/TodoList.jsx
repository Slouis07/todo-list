function TodoList() {
      const todoList = [
    { id: 1, title: "Study React" },
    { id: 2, title: "Study some Python too" },
    { id: 3, title: "Review notes and do active recall" },
  ];
  return (
    <>
     <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;