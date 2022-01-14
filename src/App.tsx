import {useEffect} from "react";
import * as React from "react";
import getWeb3 from "./util/getWeb3";
// import * as Web3 from "web3";

const App = () => {
  useEffect(() => {
    (async () => {
      //@ts-ignore
      window.huy = await getWeb3();
    })()
  }, []);

  return (
    <div>
      <p>
        hello world
      </p>
  </div>
  );
};
export default App;
