import React from "react";
import styles from './style.module.css';
import Messages from "../Messages";
import ActionsPanel from "../ActionsPanel";

const Chat = () => {
    return (<div className={styles.wrapper}>
        <Messages />
        <ActionsPanel />
    </div>)
}

export default Chat;
