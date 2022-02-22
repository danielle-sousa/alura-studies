import React from 'react';
import Form from './components/form';
import List from './components/list';
import style from './App.module.scss';
import StopWatch from './components/stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
     <Form />

     <List />

     <StopWatch />
    </div>
  );
}

export default App;
