import React, { useRef } from "react";
import { useState, useEffect } from "react";
import DePay from "../ethereum/DePay";
import web3 from "../ethereum/web3";
import classes from "./AddFunds.module.css";
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
const AddFunds = (props) => {
  const [accounts, setAccounts] = useState("0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002");
  const [msg, setMsg] = useState({ value: "", status: 1 });
  const [processing,setProcessing]=useState(false);
  const amountRef = useRef();
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
      try {
        await DePay.methods
          .addFund()
          .send({ from: accounts[0], value: amountRef.current.value });
        amountRef.current.value = 0;
        setMsg({value:"Success",status:1});
        setProcessing(false);
      } catch (err) {
        setMsg({value:err.message,status:0});
        setProcessing(false);
      }
      return(<></>);
    };
    func();
  };
  const onClickHandler = () => {
    setMsg({value:"",status:1});
    return(<></>);
  };
  return (
    <Modal dontShow={props.dontShow}>
      <h1>ADD FUNDS</h1>
      {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<h3>Account Connected : {accounts[0]}</h3>}
      <div className={classes.loadBox}>
     {accounts=='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<Loader></Loader>}
     </div>
      <form onSubmit={onSubmitHandler}>
        {accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<div className={classes.input}>
          <label htmlFor="amount">Enter The Amount : </label>
          <input
            onClick={onClickHandler}
            ref={amountRef}
            type="number"
            placeholder="Weis"
          ></input>
        </div>}
        <div>
          {!processing&&accounts!='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002'&&<button className={classes.button}>Submit</button>}
          {<button className={classes.button} onClick={props.dontShow}>Close</button>}
        </div>
        <h4 className={`${msg.status==1&&classes.success} ${msg.status==0&&classes.failure}`}>{msg.value}</h4>
      </form>
    </Modal>
  );
};

export default AddFunds;
