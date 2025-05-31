import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ToDoList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { username } = useParams();
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/todolist`, { username });
        setTodoList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodo();
  }, [username]);

  const addNewTask = async () => {
    if (!newTask.trim() || !newDeadline.trim()) {
      alert('Task and deadline cannot be empty!');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/api/newtask`, {
        username,
        task: newTask,
        deadline: newDeadline,
      });
      setTodoList(response.data);
      setNewTask("");
      setNewDeadline("");
    } catch (error) {
      console.error(error);
    }
  };

  const finishTask = async (task) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/finish`, {
        data: { username, task },
      });

      if (response.status === 200) {
        // Remove the task from the local state
        setTodoList(todoList.filter((t) => t.task !== task));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-w-full min-h-full bg-gray-50 border border-black'>
      <div className='flex flex-row justify-center gap-2 items-center m-4 p-4 border border-gray-300 rounded-lg shadow-md'>
        <input
          type="text"
          className='border border-gray-400 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500'
          placeholder='Enter your Task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          className='border border-gray-400 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500'
          value={newDeadline}
          onChange={(e) => setNewDeadline(e.target.value)}
        />
        <button
          className='bg-green-500 p-4 rounded-lg mb-4 text-white font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
          onClick={addNewTask}
        >
          Add Task
        </button>
      </div>

      <div className='m-4'>
        {todoList.length > 0 ? (
          <div className='flex flex-col gap-4 justify-center items-center font-bold text-lg'>
            {todoList.map((todo, index) => (
              <div
                key={index}
                className='w-1/2 p-4 bg-white border border-gray-300 rounded shadow flex justify-between items-center'
              >
                <div className='flex flex-col'>
                  <p><strong>Task:</strong> {todo.task}</p>
                  <p className='text-red-500'><strong>Deadline:</strong> {new Date(todo.deadline).toLocaleDateString()}</p>
                </div>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => finishTask(todo.task)}
                >
                  Finish
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No tasks found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
