import React from 'react';
import DePay from '../ethereum/DePay';
import web3 from "../ethereum/web3";
import classes from "./Lend.module.css";
import Modal from "../UI/Modal";
import { useState,useEffect,useRef } from 'react';
import Loader from "../UI/Loader";
const Lend=(props)=>{
    const [accounts, setAccounts] = useState("0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002");
    const [msg, setMsg] = useState({ value: "", status: 1 });
    const [processing, setProcessing] = useState(false);
    const amountRef = useRef();
    const addressRef = useRef();
    useEffect(() => {
      const load = async () => {
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      };
      load();
    }, []);
    setInterval(() => {
        const load = async () => {
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        };
        load();
      }, 5000);
    const onSubmitHandler = (event) => {
      event.preventDefault();
      setProcessing(true);
      const func = async () => {
        try{
        await DePay.methods
          .lend(amountRef.current.value,addressRef.current.value)
          .send({ from: accounts[0], value:0});
        amountRef.current.value = 0;
        addressRef.current.value = "";
        setMsg({value:"Success",status:1});
        setProcessing(false);
        }
        catch(err)
        {
            setMsg({value:err.message,status:0});
            setProcessing(false);
        }
      };
        func();
    };
  
    const onClickHandler = () => {
      setMsg({value:"",status:1});
    };
    return (
      <Modal dontShow={props.dontShow}>
        <h1>LEND</h1>
        {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<h3>Account Connected : {accounts[0]}</h3>}
        <div className={classes.loadBox}>
     {accounts=='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<Loader></Loader>}
     </div>
        <form onSubmit={onSubmitHandler}>
        {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&& <div className={classes.input}>
          <label htmlFor="amount">Enter The Amount : </label>
          <input
            onClick={onClickHandler}
            ref={amountRef}
            type="number"
            placeholder="Weis"
          ></input>
          </div >}
          {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<div className={classes.input}>
          <label htmlFor="address">Enter The Address : </label>
          <input
            onClick={onClickHandler}
            ref={addressRef}
            type="string"
            placeholder="Goerli TestNet"
          ></input>
          </div>}
          <div>
        {!processing&&accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<button className={classes.button}>Submit</button>}
        <button className={classes.button} onClick={props.dontShow}>Close</button>
        </div>
        <h4 className={`${msg.status==1&&classes.success} ${msg.status==0&&classes.failure}`}>{msg.value}</h4>
        </form>
      </Modal>
    );
}

export default Lend;