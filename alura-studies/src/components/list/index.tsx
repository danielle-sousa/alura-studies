import React, { useState } from "react";
import style from './List.module.scss'

function List() {

    const [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'Javascript',
        time: '01:00:00'
    },
    {
        task: 'Typescript',
        time: '01:45:00'
    }]);
    

    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, {
                    task: 'Estudar estado',
                    time: '00:50:00'
                }]) 
            }}>Estudos do dia</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li className={style.item}>
                        <h3> {task.task} </h3>
                        <span> {task.time} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;