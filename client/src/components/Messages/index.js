import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

    }, []);

    return (<div className={styles.wrapper}>
        messages
    </div>)
}

export default Messages;
