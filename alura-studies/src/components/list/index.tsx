import React from "react";
import './style.scss'

function List() {
    
    const tasks = [{
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
    }];

    return (
        <aside className="taskList">
            <h2>Estudos do dia</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li className="item">
                        <h3> {task.task} </h3>
                        <span> {task.time} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;