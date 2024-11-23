import React from 'react';

const TaskItem = ({ task, onDelete }) => (
  <div className="task-item">
    <span>{task}</span>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default TaskItem;
