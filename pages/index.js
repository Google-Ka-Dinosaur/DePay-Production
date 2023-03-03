import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import web3 from "../ethereum/web3";
import Header from "../HomePagecomponents/header/header";
import Content from "../HomePagecomponents/content/content";
import Footer from "../HomePagecomponents/footer/footer";

const Home = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    const load = async () => {
      const addresses = await web3.eth.getAccounts();
      setAccount(addresses);
    };
    load();
  }, []);
  return (
    <div className= {classes.body}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default Home;
