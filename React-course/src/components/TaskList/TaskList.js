import { formatMs } from '@material-ui/core';
import React from 'react';
import CompleteButton from '../CompleteButton/CompleteButton';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
  return (
    <div className="Task_list">
      {props.items.map((item) => (
        <div>
          <TaskItem
            onDelete={props.onDelete}
            id={item.id}
            name={item.name}
            isCompleted={item.isCompleted}
          />
          <CompleteButton {...item} onComplete={props.onComplete} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
