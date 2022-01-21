import React from "react";
import styles from './style.module.css';
import Messages from "../Messages";
import ActionsPanel from "../ActionsPanel";

const Chat = ({ web3State }) => {
    return (<div className={styles.wrapper}>
        <Messages web3State={web3State} />
        <ActionsPanel web3State={web3State} />
    </div>)
}

export default Chat;
