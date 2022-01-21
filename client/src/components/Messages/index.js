import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Messages = ({ web3State }) => {
    const [messages, setMessages] = useState([]);
    const { account, web3, contract } = web3State;

    const getMessages = async () => {
        const messages = await contract.methods.getMessages().call();
        setMessages(messages);
    }

    useEffect(() => {
        getMessages();
    }, []);

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
