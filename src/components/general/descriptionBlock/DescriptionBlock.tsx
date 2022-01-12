import React from 'react';
import style from './DescriptionBlock.module.css'

type PropsTypeDescription = {
    title1: string,
    title2: string,
    text1: string,
    text2: string,
}

export function DescriptionBlock(props: PropsTypeDescription) {
    return (
        <div className={style.text}>
            <div className={style.textCols}>
                <h2>{props.title1}</h2>
                <p>{props.text1}</p>
            </div>
            <div className={style.textCols}>
                <h2>{props.title2}</h2>
                <p>{props.text2}</p>
            </div>
        </div>
    );
}