import { formatMs } from '@material-ui/core';
import React from 'react';
import CompleteButton from '../CompleteButton/CompleteButton';
import TaskItem from '../TaskItem/TaskItem';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
const TaskList = (props) => {
  return (
    <div className="Task_list">
      {props.items.map((item) => (
        <div className="Task_item">
          <TaskItem
            onDelete={props.onDelete}
            id={item.id}
            name={item.name}
            isCompleted={item.isCompleted}
          />
          <DeleteButton {...item} onDelete={props.onDelete} />
          <EditButton {...item} onEdit={props.onEdit} />
          <CompleteButton {...item} onComplete={props.onComplete} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
