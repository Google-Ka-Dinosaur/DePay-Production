const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledDePay = require("./build/DePay.json");
const provider = new HDWalletProvider(
  "letter exact trust swing able chuckle skull crisp hammer swear divorce unusual",
  // remember to change this to your own phrase!
  "https://goerli.infura.io/v3/62abe1a43d7441dfaf2ef99f497b6de0"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledDePay.abi)
    .deploy({ data: compiledDePay.evm.bytecode.object })
    .send({ gas: "4000000", from: accounts[0] });

  console.log("Contract DePay deployed to", result.options.address);
  provider.engine.stop();
};
deploy();