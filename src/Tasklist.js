import React from 'react';

const TaskList = ({ tasks, setTasks }) => {
  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const editTask = (index) => {
    const updated = [...tasks];
    updated[index].editing = true;
    setTasks(updated);
  };

  const saveEdit = (index, newName, newDate) => {
    if (!newName.trim() || !newDate) {
      alert('Task name and date cannot be empty.');
      return;
    }

    const updated = [...tasks];
    updated[index].name = newName.trim();
    updated[index].time = newDate;
    updated[index].editing = false;
    setTasks(updated);
  };

  return (
    <div className="divel to-grid">
      {tasks.map((task, index) => (
        <div className="task-row" key={index}>
          <div className="get">
            <input
              type="checkbox"
              className="check"
              checked={task.done}
              onChange={() => toggleDone(index)}
            />
            {task.editing ? (
              <input
                type="text"
                className="edit-input"
                defaultValue={task.name}
                onChange={(e) => (task.name = e.target.value)}
              />
            ) : (
              <span className={task.done ? 'completed' : ''}>{task.name}</span>
            )}
          </div>
          <div className="get">
            {task.editing ? (
              <input
                type="date"
                className="edit-input"
                defaultValue={task.time}
                onChange={(e) => (task.time = e.target.value)}
              />
            ) : (
              task.time
            )}
          </div>
          <div className="btns">
            {task.editing ? (
              <button className="add" onClick={() => saveEdit(index, task.name, task.time)}>Save</button>
            ) : (
              <button className="add" onClick={() => editTask(index)}>Edit</button>
            )}
            <button className="dele" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
