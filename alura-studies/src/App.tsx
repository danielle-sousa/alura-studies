import React, { useState } from 'react';
import Form from './components/form';
import List from './components/list';
import style from './App.module.scss';
import StopWatch from './components/stopwatch';
import { ITasks } from './types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);

  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task, 
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function doneTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(previousTasks => previousTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />

     <List 
     tasks={tasks}
     selectTask={selectTask} />

     <StopWatch selected={selected} doneTask={doneTask} />
    </div>
  );
}

export default App;
