import React, { useState, useEffect } from 'react';
import TaskList from './Tasklist.js';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskName.trim() || !taskDate) {
      alert('Please enter both task and date!');
      return;
    }

    const newTask = {
      name: taskName.trim(),
      time: taskDate,
      done: false,
      editing: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDate('');
  };

  return (
    <div className="container">
      <p className="main1">To-do list</p>
      <div className="hd">
        <div className="main">
          <input
            placeholder="to-do list"
            className="todo inp"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type="date"
            className="date inp"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
          <button className="add" onClick={addTask}>Add</button>
        </div>
      </div>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
