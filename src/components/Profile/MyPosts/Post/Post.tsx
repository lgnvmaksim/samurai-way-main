import React from "react";
import s from './Post.module.css';
import {state} from "../../../../state/state";

// type MessagePropsType = {
//     message:string
// }

export const Post = () => {
    let postName = state.profilePage.posts
    return (
        <div className={s.item}>
            {postName.map(e =>
                <div key={e.id}><img
                    src={'https://images.promotionsonly.com.au/hires/funny-face-stress-shape.jpg'}/> {e.message}
                    <div>like :{e.likesCount}</div>
                </div>)}
        </div>
    )
}