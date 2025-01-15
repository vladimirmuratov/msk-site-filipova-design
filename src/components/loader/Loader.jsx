import style from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={style.loader}>
            <div className={`${style.heart} ${style.pulse}`}></div>
            <div className={`${style.heart} ${style.echo}`}></div>
        </div>
    )
}
