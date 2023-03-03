import Head from "next/head";
import Script from "next/script";
import "../styles/app.css"
import NavBar from "../HomePagecomponents/header/navbar";
import { useState,useEffect} from "react";
import web3 from "../ethereum/web3";
import Web3 from "web3";
function MyApp({ Component, pageProps }) {
  const [connected, setConnected] = useState(async ()=>{ let value = await web3.eth.getAccounts();
    if (value.length == 0) {
      return false;
    }
    return true;
  });
  useEffect(()=>{
    const load=async() => {
        let value = await web3.eth.getAccounts();
        if (value.length == 0) {
          return false;
        }
        return true;
      }
      load();
  },[])

  setInterval(async () => {
    let value = await web3.eth.getAccounts();

    if (value.length == 0) {
      setConnected(false);
      return;
    }
    setConnected(true);
  }, 5000);


  const connect = async() => {
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/62abe1a43d7441dfaf2ef99f497b6de0"
  );
  web3 = new Web3(provider);
}
  };
  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <div className="main">
     
      <NavBar connect={connect} connected={connected}></NavBar>
      <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;