import React, { useState } from 'react';
import Form from './components/form';
import List from './components/list';
import style from './App.module.scss';
import StopWatch from './components/stopwatch';
import { ITasks } from './types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />

     <List tasks={tasks} />

     <StopWatch />
    </div>
  );
}

export default App;
