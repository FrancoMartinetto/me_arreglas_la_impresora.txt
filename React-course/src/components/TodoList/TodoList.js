import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
  return (
    <div className="todo_list">
      {props.items.map((item) => (
        <TodoItem
          onDelete={props.deleteTodo}
          id={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
