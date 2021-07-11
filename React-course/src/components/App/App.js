import TaskButton from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import ProgressBar from '../ProgressBar/ProgressBar';
import '../../styles/styles.css';
import React, { useState, useEffect } from 'react';
import { errorHandler } from '../util';
import { v4 as uuidv4 } from 'uuid';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../../services/taskService';
function App() {
  let [taskList, setTaskList] = useState([]);
  const getServerTasks = () => {
    getTasks()
      .then((tasks) => {
        setTaskList(tasks.data);
      })
      .catch(errorHandler);
  };

  useEffect(() => {
    getServerTasks();
  }, []);

  const newTask = (todoStringValue) => {
    let newTask = {
      id: uuidv4(),
      name: todoStringValue,
      isCompleted: false,
    };
    createTask(newTask)
      .then((result) => {
        setTaskList([...taskList, result.data]);
      })
      .catch(errorHandler);
  };

  let onDeleteTask = (id) => {
    deleteTask(id)
      .then((result) => {
        if (result.status === 200) {
          setTaskList(taskList.filter((todoItem) => id !== todoItem.id));
        }
      })
      .catch(errorHandler);
  };

  const completeTask = (id) => {
    let task = taskList.find((el) => {
      return el.id === id;
    });
    task.isCompleted = !task.isCompleted;
    updateTask(task)
      .then(() => {
        getServerTasks();
      })
      .catch();
  };

  return (
    <div className="App">
      <h1 className="Title">Task List!</h1>
      <TaskList
        items={taskList}
        onComplete={completeTask}
        onDelete={onDeleteTask}
      />
      <TaskButton onAdd={newTask} />
      <ProgressBar items={taskList} />
    </div>
  );
}

export default App;
