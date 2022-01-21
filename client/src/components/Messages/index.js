import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Messages = ({ web3State }) => {
    const [messages, setMessages] = useState([]);
    const { account, web3, contract } = web3State;

    const getMessages = async () => {
        const messages = await contract.methods.getMessages().call();
        console.log(messages);
    }

    useEffect(() => {
        getMessages();
    }, []);

    return (<div className={styles.wrapper}>
        messages
    </div>)
}

export default Messages;
