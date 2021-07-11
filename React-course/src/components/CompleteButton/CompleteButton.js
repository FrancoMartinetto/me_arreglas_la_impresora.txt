import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Check } from '@material-ui/icons';
import React from 'react';

const CompleteButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${props.isCompleted ? 'yellow' : '#3eea86'}`,
      }}
      className={'complete_btn'}
      onClick={() => {
        props.onComplete(props.id);
      }}
    >
      {props.isCompleted ? (
        <FontAwesomeIcon icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      )}
    </button>
  );
};

export default CompleteButton;
