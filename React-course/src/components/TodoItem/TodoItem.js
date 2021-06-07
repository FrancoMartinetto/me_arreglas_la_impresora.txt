import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="TodoItem">
      <h3 className={props.isCompleted ? 'text-strike' : null}>
        {props.name}
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Eliminar
        </button>
      </h3>
    </div>
  );
};

export default TodoItem;
