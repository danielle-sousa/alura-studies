import React from "react";
import { ITasks } from "../../types/ITask";
import Button from "../button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state = {
        task: '',
        time: '00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(tasksOld => 
            [...tasksOld, 
                {...this.state,
                selected: false,
                completed: false,
                id: uuidv4()
            }]);
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione uma nova tarefa</label>
                    <input type="text" name="task" id="task" 
                    value={this.state.task} 
                    onChange={event => this.setState({...this.state, task: event.target.value})} placeholder="O que você quer estudar?" required></input>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" value={this.state.time} onChange={event => this.setState({...this.state, time: event.target.value })} required ></input>
                </div>

                <Button type="submit">
                    Adicionar
                </Button>

            </form>
        )
    }
}

export default Form;