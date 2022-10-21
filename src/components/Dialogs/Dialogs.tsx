import {state} from "../../state/state";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";

export const DialogItem=()=>{
    let dialogs = state.dialogsPage.dialogs
    return(
        <div className={s.dialog}>
            {dialogs.map(d =>  <NavLink key={d.id} to={`${'/dialogs'}/${d.id}`}><div>{d.name} </div> </NavLink>)}
        </div>
    )
}

export const MessageItem = ()=>{
    let message = state.dialogsPage.messages
    return (
            <div className={s.message}>
                {message.map(m=><div key={m.id}>{m.message}</div>)}
            </div>
    )
}

export const Dialogs = () => {

    return (
            <div className={s.dialogsItems}>
                <DialogItem/>
                <MessageItem/>
            </div>
    )
}