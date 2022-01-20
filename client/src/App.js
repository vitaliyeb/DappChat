import React, {useEffect, useState} from "react";
import ChatContract from "./contracts/Chat.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Web3 from "web3";

const App = () => {
    const [value, setValue] = useState('');
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        (async () => {
            const web3 = await getWeb3();
            const account = (await web3.eth.getAccounts())[0];
            const networkId = await web3.eth.net.getId();
            const contract = new web3.eth.Contract(ChatContract.abi, ChatContract.networks[networkId].address);
            setWeb3(web3);
            setAccount(account);
            setContract(contract);
            console.log(contract)
            window.w = web3;
            console.log(await contract.methods.getMessages().call());


            // console.log(em);
            // em.on("data", (x) => console.log("data", x));
            // em.on("changed", (x) => console.log("changed", x));
            // em.on("error", (x) => console.log("error", x));
            // em.on("connected", (x) => console.log("connected", x));
        })();
    }, []);

    const changeGreeting = async () => {
        console.log(value);
        contract.methods.pushMessage(value).send({
            from: account
        });
    }

    return (<div>
        <h1>{ greeting }</h1>
        <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
        <button onClick={changeGreeting}>change</button>
    </div>)
};

export default App;
