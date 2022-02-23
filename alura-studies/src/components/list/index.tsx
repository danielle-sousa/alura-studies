import { ITasks } from '../../types/ITask';
import style from './List.module.scss'

function List({ tasks }: { tasks: ITasks[]}) {

    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>

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