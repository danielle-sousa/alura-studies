import style from './Watch.module.scss'

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesOne, minutesTwo] = String(minutes).padStart(2, '0');
    const [secondsOne, secondsTwo] = String(seconds).padStart(2, '0');;
    return(
        <>
        <span className={style.watchNumbers}>{minutesOne}</span>
        <span className={style.watchNumbers}>{minutesTwo}</span>
        <span className={style.watchDivider}>:</span>
        <span className={style.watchNumbers}>{secondsOne}</span>
        <span className={style.watchNumbers}>{secondsTwo}</span>
        </>
    )
}