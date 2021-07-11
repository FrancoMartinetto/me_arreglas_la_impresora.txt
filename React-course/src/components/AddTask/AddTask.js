import React, { useState } from 'react';

const AddTask = (props) => {
  const [currentTask, setCurrentTask] = useState('');

  return (
    <div className={'add_Task_container'}>
      <input
        value={currentTask}
        onChange={(event) => {
          setCurrentTask(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.onAdd(currentTask);
        }}
        className="add_Task_button"
      >
        Agregar Quehacer
      </button>
    </div>
  );
};

export default AddTask;
