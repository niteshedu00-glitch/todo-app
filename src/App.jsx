import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TaskWork from "./components/TaskWork";

const App = () => {
  const [todos, setTodos] = useState([]);

  const updateProgress = (updatedTask, value) => {
    setTodos(
      todos.map((todo) =>
        todo.task === updatedTask.task ? { ...todo, progress: value } : todo
      )
    );
  };

  const addTodo = (task) => {
    setTodos([...todos, { task, progress: 0, due: "2025-10-25" }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
        <Route path="/input" element={<TodoInput addTodo={addTodo} />} />
        <Route
          path="/task"
          element={<TaskWork todo={todos[0]} updateProgress={updateProgress} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
