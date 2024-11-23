import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p style={{ color: '#6c757d' }}>No tasks yet. Add a task to get started!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
