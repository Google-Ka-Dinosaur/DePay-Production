import React from "react";
import { useState, useEffect } from "react";
import classes from "./TransactionHistory.module.css";
import DePay from "../ethereum/DePay";
import Loader from "../UI/Loader";
import Footer from "../HomePagecomponents/footer/footer";
const TransactionHistory = () => {
  const [events, setEvents] = useState([]);
  let list = <p>loading......</p>;


  useEffect(() => {
    const load = async () => {
      const events = await DePay.getPastEvents("transactionData", {
        fromBlock: 0,
      });
      const newData = events.map((eventData) => {
        return {
          amount: eventData.returnValues.amount,
          date: eventData.returnValues.date,
          purpose: eventData.returnValues.purpose,
          time: eventData.returnValues.time,
          from: eventData.returnValues._from,
          to: eventData.returnValues._to,
        };
      });
      setEvents(JSON.stringify(newData));
    };
    load();
  }, []);



  setInterval(() => {
    const load = async () => {
      const events = await DePay.getPastEvents("transactionData", {
        fromBlock: 0,
      });
      const newData = events.map((eventData) => {
        return {
          amount: eventData.returnValues.amount,
          date: eventData.returnValues.date,
          purpose: eventData.returnValues.purpose,
          time: eventData.returnValues.time,
          from: eventData.returnValues._from,
          to: eventData.returnValues._to,
        };
      });
      setEvents(JSON.stringify(newData));
    };
    load();
  }, 5000);

  const dateFormater = (date) => {
    date = date.toString();
    if (date.length != 8) date = "0" + date;
    return date.substr(0, 2) + "/" + date.substr(2, 2) + "/" + date.substr(4);
  };

  const timeFormater = (time) => {
    time = time.toString();
    while (time.length != 4) {
      time = "0" + time;
    }
    return time.substr(0, 2) + ":" + time.substr(2, 2);
  };

  const amountFormater = (amt) => {
    return amt;
  };

  if (events.length !=0) {
    const data = JSON.parse(events);
    list = (
      <div className={classes.box}>
        <h1 className={classes.heading}>DEPAY LEDGER</h1>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.design}>FROM</th>
              <th className={classes.design}>TO</th>
              <th className={classes.design}>AMOUNT</th>
              <th className={classes.design}>DATE</th>
              <th className={classes.design}>TIME</th>
              <th className={classes.design}>PURPOSE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.time+" "+item.date}>
                <td className={classes.design}>{item.from}</td>
                <td className={classes.design}>{item.to}</td>
                <td className={classes.design}>
                  {amountFormater(item.amount)} Wei
                </td>
                <td className={classes.design}>{dateFormater(item.date)}</td>
                <td className={classes.design}>{timeFormater(item.time)}</td>
                <td className={classes.design}>{item.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if(events.length==0)
  return(<div className={classes.loadBox}><Loader></Loader></div>)
  return <>{list}<Footer></Footer></>;
};
export default TransactionHistory;
