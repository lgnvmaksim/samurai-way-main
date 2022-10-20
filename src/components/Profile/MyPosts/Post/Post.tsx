import React from "react";
import s from './Post.module.css';
import {message} from "antd";

type MessagePropsType = {
    message:string
}

export const Post = (props: MessagePropsType) => {
    return (

        <div className={s.item}>
            <img src={'https://images.promotionsonly.com.au/hires/funny-face-stress-shape.jpg'}/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}