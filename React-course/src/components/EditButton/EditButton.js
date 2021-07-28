import React from 'react';
const EditButton = (props) => {
  return (
    <button
      className="EditButton"
      onClick={() => {
        props.onEdit(props.id);
      }}
    >
      Edit
    </button>
  );
};
export default EditButton;
