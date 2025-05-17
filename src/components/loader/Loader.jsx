import style from './Loader.module.css';
import { memo } from 'react';

export const Loader = memo(() => {
    return (
        <div className={style.loader}>
            <div className={`${style.heart} ${style.pulse}`}></div>
            <div className={`${style.heart} ${style.echo}`}></div>
        </div>
    );
});
