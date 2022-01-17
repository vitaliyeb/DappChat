import React, {useEffect, useState} from "react";
import Greetings from "./contracts/Greetings.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Web3 from "web3";

const App = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        (async () => {
            const web3 = await getWeb3();
            const account = (await web3.eth.getAccounts())[0];
            const networkId = await web3.eth.net.getId();
            const contract = new web3.eth.Contract(Greetings.abi, Greetings.networks[networkId].address);
            setWeb3(web3);
            setAccount(account);
            setContract(contract);
        })();
    }, []);

    return (<div>

    </div>)
};

export default App;
