import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Messages = ({ web3State }) => {
    let [messages, setMessages] = useState([]);
    let { account, web3, contract } = web3State;

    const getMessages = async () => setMessages(await contract.methods.getMessages().call());
    useEffect(() => getMessages(), []);

    useEffect(() => {
        const eventEmitter = contract.events.NewMessage().on("data", (event) => {
            setMessages([...messages, event.returnValues]);
        });
        return () => eventEmitter.unsubscribe();
    })

    const isOwner = ({ owner }) => owner === account;

    return (<div className={styles.wrapper}>
        <div className={styles.messageArea}>
            {
                messages.map((message, key) => (<p
                    className={[styles.message, isOwner(message) && styles.messageOwner].join(' ')}
                    key={key}
                >
                    {message.value}
                </p>))
            }
        </div>
    </div>)
}

export default Messages;
