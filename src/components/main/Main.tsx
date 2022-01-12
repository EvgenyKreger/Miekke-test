import React from 'react';
import style from './Main.module.css'


type PropsMainType={
    block1:any,
    block2:any,
    block3:any,
    block4?:any,
    block5?:any,

}

export function Main(props:PropsMainType) {

    return (
        <div className={style.card}>
            {props.block1}
            {props.block2}
            {props.block3}
            {props.block4}
            {props.block5}
        </div>
    );
}
