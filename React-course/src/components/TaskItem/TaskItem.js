import React from 'react';

const TaskItem = (props) => {
  return (
    <div className="TaskItem">
      <h3 className={props.isCompleted ? 'text-strike' : null}>{props.name}</h3>
    </div>
  );
};

export default TaskItem;
