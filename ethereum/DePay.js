import web3 from "./web3";
import DePayContract from "./build/DePay.json";
 
const instance = new web3.eth.Contract(
  DePayContract.abi,
"0xBDA68d63f9a5cE697E43b34dd9e9A438aFE1Eb33"
);
 
export default instance;