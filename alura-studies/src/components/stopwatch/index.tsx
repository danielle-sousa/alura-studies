import Button from "../button"
import Watch from "./watch"
import style from './Stopwatch.module.scss'

export default function StopWatch() {
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

            <div className={style.watchWrapper}>
                <Watch />
            </div>
            
            <div>
                <Button>
                    Iniciar!
                </Button>
            </div>
        </div>
    )
}