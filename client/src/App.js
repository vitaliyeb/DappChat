import React, {useEffect, useReducer, useState} from "react";
import ChatContract from "./contracts/Chat.json";
import Web3 from "web3";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Chat from "./components/Chat";

const reducer = (state, {type, payload}) => {
    switch (type){
        case 'init':
            return {
                ...payload
            }
        default:
            return state;
    }
}

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [web3State, dispatch] = useReducer(reducer, {
        contract: null,
        web3: null,
        account: null
    });

    const init = async () => {
        const web3 = await getWeb3();
        const account = (await web3.eth.getAccounts())[0];
        const networkId = await web3.eth.net.getId();
        const contract = new web3.eth.Contract(ChatContract.abi, ChatContract.networks[networkId].address);

        dispatch({ type: 'init', payload: {
                contract: contract,
                web3: web3,
                account: account
            }
        })
        setIsLoading(false);
    }

    useEffect(()=>{
        init();
    }, []);


    return (<div>
        { !isLoading &&  <Chat web3State={web3State} /> }
    </div>)
};

export default App;
