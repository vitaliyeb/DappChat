import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const ActionsPanel = ({ web3State }) => {
    const [value, setValue] = useState('');
    const { account, web3, contract } = web3State;

    const sendMessage = async () => {
        const response = await contract.methods.pushMessage(value).send({
            from: account
        });
        if (response.status) setValue('');
    };

    return (<div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
            <button onClick={sendMessage}>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
            </button>
        </div>
    </div>)
}

export default ActionsPanel;
