import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import TodoFilter from "./TodoFilter.jsx";
import "../App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addTodo(text) {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="container">
      <h2 className="container-title">📝 My Todo List</h2>

      <TodoInput onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

      <div className="footer">
        <p>Total: {total} | Completed: {completed}</p>
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
