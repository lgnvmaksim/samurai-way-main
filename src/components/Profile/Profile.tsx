import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            <div>
                ava + desck
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    )
}