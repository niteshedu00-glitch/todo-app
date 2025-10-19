import React from "react";
import TodoList from "../components/TodoList";

function TodoListPage({ todos, deleteTodo }) {
  return <TodoList todos={todos} />;
}

export default TodoListPage;
