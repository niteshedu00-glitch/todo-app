import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TaskWork from "./components/TaskWork";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (task) => {
    setTodos([...todos, { task, progress: 0, due: "2025-10-25" }]);
  };

  // Delete a todo by index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Update progress of a todo
  const updateProgress = (updatedTodo, value) => {
    setTodos(
      todos.map((todo) =>
        todo.task === updatedTodo.task ? { ...todo, progress: value } : todo
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page: Todo List */}
        <Route
          path="/"
          element={<TodoList todos={todos} deleteTodo={deleteTodo} />}
        />

        {/* Input page: Add new todo */}
        <Route path="/input" element={<TodoInput addTodo={addTodo} />} />

        {/* Task page: Update progress */}
        <Route
          path="/task"
          element={
            todos[0] ? (
              <TaskWork todo={todos[0]} updateProgress={updateProgress} />
            ) : (
              <TodoList todos={todos} deleteTodo={deleteTodo} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
