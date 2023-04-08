import web3 from "./web3";
import DePaydualContract from "./build/DePaydual.json";
 
const instance = new web3.eth.Contract(
  DePaydualContract.abi,
"0x8bfd01328e90E768363fbf0E047EA34e7E3f969D"
);
 
export default instance;