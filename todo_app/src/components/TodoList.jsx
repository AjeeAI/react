import "../App.css";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="no-todo-text">No todos to show.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div
            onClick={() => onToggle(todo.id)}
            className={`todo-text ${todo.completed ? "completed" : ""}`}
          >
            {todo.completed ? "☑" : "☐"} {todo.text}
          </div>
          <button onClick={() => onDelete(todo.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
