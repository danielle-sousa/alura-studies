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

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />

     <List 
     tasks={tasks}
     selectTask={selectTask} />

     <StopWatch />
    </div>
  );
}

export default App;
