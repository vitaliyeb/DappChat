import React, {useEffect, useRef, useState} from "react";
import styles from './style.module.css';

const Messages = ({ web3State }) => {
    let [messages, setMessages] = useState([]);
    const targetBottomScroll = useRef(null);
    let { account, web3, contract } = web3State;

    useEffect(() => {
        (async () => {
            setMessages(await contract.methods.getMessages().call())
            targetBottomScroll.current.scrollIntoView();
        })()
    }, []);

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
                >   <span>{ message.owner }</span>
                    {message.value}
                </p>))
            }
            <div ref={targetBottomScroll}/>
        </div>
    </div>)
}

export default Messages;
