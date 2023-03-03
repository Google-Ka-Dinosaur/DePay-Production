import React from "react";
import DePay from "../ethereum/DePay";
import web3 from "../ethereum/web3";
import classes from "./ViewRequests.module.css";
import { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
const ViewRequests = (props) => {
  let i = 0;
  const [data, setData] = useState({
    account: "0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002",
    requestsNo: 0,
    requests: [],
  });
  const [processing, setProcessing] = useState(false);
  const [msg, setMsg] = useState({ value: "", status: 1 });
  useEffect(() => {
    const load = async () => {
      const address = await web3.eth.getAccounts();
      let requestsNo = 0;
      let requests = [];
      let value = {};
      let info = {};
      try {
        requestsNo = await DePay.methods.numberOfRequets(address[0]).call();
        for (i = 0; i < requestsNo; i++) {
          value = await DePay.methods.requests(address[0], i).call();
          info = {
            address: value.from,
            amount: value.value,
            status: value.complete,
            description: value.description,
            id: i,
          };
          requests.push(info);
        }
      } catch (err) {
        setMsg({ value: err.message, status: 0 });
      }
      setData({
        account: address,
        requestsNo,
        requests,
      });
    };
    load();
  }, []);
  setInterval(() => {
    const load = async () => {
      const address = await web3.eth.getAccounts();
      let requestsNo = 0;
      let requests = [];
      let value = {};
      let info = {};
      try {
        requestsNo = await DePay.methods.numberOfRequets(address[0]).call();
        for (i = 0; i < requestsNo; i++) {
          value = await DePay.methods.requests(address[0], i).call();
          info = {
            address: value.from,
            amount: value.value,
            status: value.complete,
            description: value.description,
            id: i,
          };
          requests.push(info);
        }
      } catch (err) {
        setMsg(err.Msg);
      }
      setData({
        account: address,
        requestsNo,
        requests,
      });
    };
    load();
  }, 5000);
  const approveHandler = async (event) => {
    setProcessing(true);
    await DePay.methods
      .approveRequest(event.target.id)
      .send({ from: data.account[0] });
    setProcessing(false);
  };
  const rejectHandler = async (event) => {
    setProcessing(true);
    await DePay.methods
      .rejectRequest(event.target.id)
      .send({ from: data.account[0] });
    setProcessing(false);
  };
  const display = (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.design}>ID</th>
          <th className={classes.design}>FROM</th>
          <th className={classes.design}>AMOUNT</th>
          <th className={classes.design}>DESCRIPTION</th>
          <th className={classes.design}>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.requests.map((item) => (
          <tr key={item.id}>
            <td className={classes.design}>{item.id}</td>
            <td className={classes.design}>{item.address}</td>
            <td className={classes.design}>{item.amount} Wei</td>
            <td className={classes.design}>{item.description}</td>
            <td className={classes.design}>
              {item.status && "COMPLETE"}
              {
                <div>
                  {!item.status && !processing&&
                  <button
                    className={classes.buttons}
                    id={item.id}
                    onClick={approveHandler}
                  >
                    Approve
                  </button>}
                </div>
              }
              {
                <div>
                  {!item.status &&!processing&&
                  <button
                    className={classes.buttons}
                    id={item.id}
                    onClick={rejectHandler}
                  >
                    Reject
                  </button>}
                </div>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <Modal dontShow={props.dontShow}>
      <h1 className={classes.topic}>VIEW ALL REQUESTS</h1>
      <hr></hr>
      {data.requests.length!=0&&<h3>Account Connected : {data.account[0]}</h3>}
     {data.requests.length!=0&& display}
     <div className={classes.loadBox}>
     {data.requests.length==0&&<Loader></Loader>}
     </div>
      <div>
        <button className={classes.button} onClick={props.dontShow}>
          Close
        </button>
      </div>
      <h4
        className={`${msg.status == 1 && classes.success} ${
          msg.status == 0 && classes.failure
        }`}
      >
        {msg.value}
      </h4>
    </Modal>
  );
};

export default ViewRequests;
