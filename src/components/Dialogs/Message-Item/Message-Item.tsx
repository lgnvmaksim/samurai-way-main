import s from './../Dialogs.module.css'
import {state} from "../../../state/state";



export const MessageItem = () => {
    let message = state.dialogsPage.messages
    return (
        <div className={s.message}>
            {message.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    )
}
