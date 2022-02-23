import { ITasks } from '../../types/ITask';
import Item from './item';
import style from './List.module.scss'

interface Props {
    tasks: ITasks[],
    selectTask: (selectedTask: ITasks) => void
}

function List({ tasks, selectTask }: Props) {

    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>

            <ul>
                {tasks.map(task => (
                   <Item
                   selectTask={selectTask}
                   key={task.id} 
                    {...task}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default List;