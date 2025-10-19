import { useNavigate } from "react-router-dom";

const TodoList = ({ todos, deleteTodo }) => {
  const navigate = useNavigate();
  if (todos.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <span className="text-6xl mb-4">😄</span>
        <p className="text-gray-500 text-xl font-medium">Haha! No tasks yet.</p>
      </div>
    );
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="p-4 mb-3 border rounded">
          <div className="flex justify-between items-center">
            <span>{todo.task}</span>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/task", { state: { todo } })}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Work on Task
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded h-2 mb-2">
  <div
    className="bg-blue-500 h-2 rounded"
    style={{ width: `${todo.progress}%` }}
  ></div>
</div>
        </li>
        
      ))}
    </ul>
  );
};
export default TodoList