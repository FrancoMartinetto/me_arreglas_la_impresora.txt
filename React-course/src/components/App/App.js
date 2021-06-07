import TodoButton from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import ProgressBar from '../ProgressBar/ProgressBar';
import '../../styles/styles.css';
import React, { useState } from 'react';

function App() {
  let [todoList, setTodoList] = useState([
    {
      id: 1,
      name: 'pegarle a Trento porque usa snake_case ',
      isCompleted: true,
    },
    {
      id: 2,
      name: 'pegarle a Manu porque usa snake_case ',
      isCompleted: true,
    },
    {
      id: 3,
      name: 'pegarle a David porque usa snake_case ',
      isCompleted: false,
    },
    {
      id: 4,
      name: 'pegarle a Puche porque usa snake_case ',
      isCompleted: true,
    },
  ]);

  let deleteToDo = (id) => {
    setTodoList(todoList.filter((todoItem) => id !== todoItem.id));
  };

  return (
    <div className="App">
      <h1 className="Title">Todo List</h1>
      <TodoList items={todoList} deleteTodo={deleteToDo} />
      <TodoButton />
      <ProgressBar items={todoList} />
    </div>
  );
}

export default App;
