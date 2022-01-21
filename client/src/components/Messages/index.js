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

    return (<div className={styles.wrapper}>
        <div>
            {
                messages.map((message, key) => (<div key={key}>
                    {message.value}
                </div>))
            }
        </div>
    </div>)
}

export default Messages;
