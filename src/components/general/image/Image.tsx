import React from 'react';
import  style from './Image.module.css'
type PropsImageType={
    image?:string,
    alt:string
}

export function Image (props:PropsImageType) {
    return (
        <div className={style.image}>
            <img className={style.img} src={props.image} alt={props.alt}/>
        </div>
    );
}
