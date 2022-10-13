import React from "react";
import s from './Post.module.css';

export const Post = () => {
    return (

        <div className={s.item}>
            <img src={'https://images.promotionsonly.com.au/hires/funny-face-stress-shape.jpg'}/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}