const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider({
        privateKeys: ["0x78be8b7b2c871f2225433f24291a48a44ac7287ef09d734ba9ff83059813b5ed"],
        providerOrUrl: "https://ropsten.infura.io/v3/2a8f732d722f48a6a87c6e324f4f4387"
      }),
      network_id: "*",
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
