import {state} from "../../state/state";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    {dialogs.map(d => <div>{d.name}</div>)}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messages.map(m=><div>{m.message}</div>)}
                </div>

            </div>
        </div>
    )
}