import React from 'react';
import  style from './Button.module.css'

type PropsButtonType={
    title:string,
    onclickButtonHandler:()=>void
}
export function Button(props:PropsButtonType) {
    return (
        <div >
           <button onClick={props.onclickButtonHandler} className={style.button}>{props.title}</button>
        </div>
    );
}