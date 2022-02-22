import style from './Watch.module.scss'

export default function Watch() {
    return(
        <>
        <span className={style.watchNumbers}>0</span>
        <span className={style.watchNumbers}>0</span>
        <span className={style.watchDivider}>:</span>
        <span className={style.watchNumbers}>0</span>
        <span className={style.watchNumbers}>0</span>
        </>
    )
}