import TaskButton from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import ProgressBar from '../ProgressBar/ProgressBar';
import '../../styles/styles.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { errorHandler } from '../util';
import { v4 as uuidv4 } from 'uuid';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../../services/taskService';
import SecondaryContent from '../SecondaryContent';
import Header from '../Header';

export const DarkThemeContext = React.createContext(false);

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
  const onEditTask = (id) => {
    var newName = prompt('Nuevo nombre');
    let task = taskList.find((el) => {
      return el.id === id;
    });
    task.name = newName;
    updateTask(task)
      .then(() => {
        getServerTasks();
      })
      .catch();
  };

  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <BrowserRouter>
      <DarkThemeContext.Provider value={darkTheme}>
        <Header />
        <button onClick={() => setDarkTheme(!darkTheme)}>Dark Theme</button>
        <Switch>
          <Route exact path={'/'}>
            <div
              className="App"
              style={{
                backgroundColor: darkTheme ? '#000' : '#fff',
                color: darkTheme ? '#fff' : '#000',
              }}
            >
              <div className="Primary Content">
                <h1 className="Title">Task List!</h1>
                <TaskList
                  items={taskList}
                  onComplete={completeTask}
                  onDelete={onDeleteTask}
                  onEdit={onEditTask}
                />
                <TaskButton onAdd={newTask} />
                <ProgressBar items={taskList} />
              </div>
            </div>
          </Route>
          <Route exact path={'/about'}>
            <SecondaryContent />
          </Route>
        </Switch>
      </DarkThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
