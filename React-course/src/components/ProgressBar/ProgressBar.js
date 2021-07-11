import React from 'react';

const ProgressBar = (props) => {
  let onlyCompletedList = props.items.filter(
    (TaskItem) => TaskItem.isCompleted
  );

  return (
    <div id="progress">
      {onlyCompletedList.length} de {props.items.length} completados
    </div>
  );
};

export default ProgressBar;
