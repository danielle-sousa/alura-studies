import Button from "../button"
import Watch from "./watch"
import style from './Stopwatch.module.scss'
import { timeToSeconds } from "../../common/utils/time"
import { ITasks } from "../../types/ITask"
import { useEffect, useState } from "react"

interface Props {
    selected: ITasks | undefined,
    doneTask: () => void
}

export default function StopWatch({ selected, doneTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    function countdown(timer: number = 0) {
        setTimeout(() => {
            if(timer > 0) {
                setTime(timer - 1);
                return countdown(timer - 1);
            }
            doneTask();
        }, 1000);
    }
    
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            
            <div>
                <Button onClick={() => countdown(time)}>
                    Iniciar!
                </Button>
            </div>
        </div>
    )
}