import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const ActionsPanel = ({ web3State }) => {
    const [value, setValue] = useState('');
    const { account, web3, contract } = web3State;

    const sendMessage = async () => {
        const response = await contract.methods.pushMessage(value).send({
            from: account
        });
    };

    return (<div className={styles.wrapper}>
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
            <button onClick={sendMessage}>send</button>
        </div>
    </div>)
}

export default ActionsPanel;
