import React from 'react';
import  style from './Description.module.css'

type PropsTypeDescription={
    title:string,
    text:string
}
export function Description(props:PropsTypeDescription) {
    return (
        <div className={style.text}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}