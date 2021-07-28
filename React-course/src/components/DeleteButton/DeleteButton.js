import React from 'react';

const DeleteButton = (props) => {
  return (
    <button
      className="DeleteButton"
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      Eliminar
    </button>
  );
};
export default DeleteButton;
