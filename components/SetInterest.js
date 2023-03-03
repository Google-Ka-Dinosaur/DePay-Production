import React from 'react';
import DePay from '../ethereum/DePay';
import web3 from "../ethereum/web3";
import classes from "./SetInterest.module.css";
import { useState,useEffect,useRef } from 'react';
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
const Pay=(props)=>{
    const [accounts, setAccounts] = useState("0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002");
    const [msg, setMsg] = useState({ value: "", status: 1 });
    const [processing, setProcessing] = useState(false);
    const rateRef = useRef();
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
    //   console.log(date);
    //   console.log(time);
    //   console.log(amountRef.current.value);
    //   console.log(addressRef.current.value);
    //   console.log(purposeRef.current.value);
      const func = async () => {
        try{
        await DePay.methods
          .setRate(addressRef.current.value,rateRef.current.value)
          .send({ from: accounts[0], value:0});
        addressRef.current.value = "";
        rateRef.current.value = "";
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
        <h1 className={classes.topic}>SET RATE OF INTEREST</h1>
        <hr></hr>
        {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<h3>Account Connected : {accounts[0]}</h3>}
        <div className={classes.loadBox}>
     {accounts=='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<Loader></Loader>}
     </div>
        <form onSubmit={onSubmitHandler} className={classes.forms}>
        {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&& <div className={classes.input}>
          <label htmlFor="amount">Enter The address : </label>
          <input
            onClick={onClickHandler}
            ref={addressRef}
            type="string"
          ></input>
          </div >}
           {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&& <div className={classes.input}>
          <label htmlFor="amount">Enter The Rate : </label>
          <input
            onClick={onClickHandler}
            ref={rateRef}
            type="number"
            placeholder="Percentage"
          ></input>
          </div >}
          <div>
        {!processing&&accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<button className={classes.button}>Submit</button>}
        <button className={classes.button} onClick={props.dontShow}>Close</button>
        </div>
        <h4 className={`${msg.status==1&&classes.success} ${msg.status==0&&classes.failure}`}>{msg.value}</h4>
        </form>
      </Modal>
    );
}

export default Pay;