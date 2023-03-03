import web3 from "./web3";
import DePayContract from "./build/DePay.json";
 
const instance = new web3.eth.Contract(
  DePayContract.abi,
"0x3b5Ca02f7aD0dA59aAb25666a109A4ae39CC8D90"
);
 
export default instance;