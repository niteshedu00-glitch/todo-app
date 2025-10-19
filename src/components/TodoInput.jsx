import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {

    const [task, setTask] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim() === "") return;

        addTodo(task);
        setTask("")

    }




 return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Todo</h2>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    );
  }


export default TodoInput

