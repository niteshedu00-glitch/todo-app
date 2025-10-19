import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TaskWork = ({ updateProgress }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the selected todo from navigation state
  const { todo } = location.state || {};
  const [progress, setProgress] = useState(todo?.progress || 0);

  if (!todo) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-600">
        <p className="text-xl mb-4">No task selected 😅</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleProgressChange = (e) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    updateProgress(todo, newProgress);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">{todo.task}</h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded h-3 mb-4">
        <div
          className="bg-blue-500 h-3 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Slider to update progress */}
      <label className="block text-gray-700 mb-2">
        Progress: {progress}%
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="w-full accent-blue-500"
      />

      {/* Due date */}
      <p className="text-gray-500 mt-3">Due: {todo.due}</p>

      <button
        onClick={() => navigate("/")}
        className="mt-5 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Back to List
      </button>
    </div>
  );
};

export default TaskWork;
