import React, {useEffect, useState} from "react";
import ChatContract from "./contracts/Chat.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Web3 from "web3";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [contract, setContract] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);


    const init = async () => {
        const web3 = await getWeb3();
        const account = (await web3.eth.getAccounts())[0];
        const networkId = await web3.eth.net.getId();
        const contract = new web3.eth.Contract(ChatContract.abi, ChatContract.networks[networkId].address);

        setContract(contract);
        setAccount(account);
        setWeb3(web3);
    }

    useEffect(()=>{
        init();
    }, []);


    return (<div>

    </div>)
};

export default App;
