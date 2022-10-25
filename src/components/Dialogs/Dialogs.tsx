import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog-Item/Dialogs-Item";
import {MessageItem} from "./Message-Item/Message-Item";


export const Dialogs = () => {

    return (
        <div className={s.dialogsItems}>
            <DialogItem/>
            <MessageItem/>
        </div>
    )
}