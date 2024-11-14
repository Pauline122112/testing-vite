import React from 'react'

function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem
