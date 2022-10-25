
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {state} from "../../../state/state";

export const DialogItem = () => {
    let dialogs = state.dialogsPage.dialogs
    return (
        <div className={s.dialog}>
            {dialogs.map(d => <NavLink key={d.id} to={`${'/dialogs'}/${d.id}`}>
                <div>{d.name} </div>
            </NavLink>)}
        </div>
    )
}
