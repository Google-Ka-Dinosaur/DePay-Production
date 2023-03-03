import React from "react";
import UserCard from "./UserCard";
import classes from "./UserPage.module.css";
import PaymtCard from "./PaymtCard";
import PayCard from "./PayCard";
import AddFunds from "../components/AddFunds";
import Pay from "../components/Pay";
import Lend from "../components/Lend";
import TakeBack from "../components/TakeBack";
import CreateRequest from "../components/CreateRequest";
import ViewRequests from "../components/ViewRequests";
import Withdraw from "../components/Withdraw";
import SetInterest from "../components/SetInterest";
import { useState } from "react";
const UserPage = (props) => {
  console.log(props);
  const [choice, setChoice] = useState(1);
  const make1 = () => {
    setChoice(1);
  };
  const make2 = () => {
    setChoice(2);
  };
  const make3 = () => {
    setChoice(3);
  };
  const make4 = () => {
    setChoice(4);
  };
  const [choices, setChoices] = useState(0);
  const makes1 = () => {
    setChoices(1);
  };
  const makes2 = () => {
    setChoices(2);
  };
  const makes3 = () => {
    setChoices(3);
  };
  const makes4 = () => {
    setChoices(4);
  };
  const makes5 = () => {
    setChoices(5);
  };
  const makes6 = () => {
    setChoices(6);
  };
  const makes7 = () => {
    setChoices(7);
  };
  const makes8 = () => {
    setChoices(8);
  };
  const closeModal = () => {
    setChoices(0);
  };
  let data1 = <></>;
  let data2 = <></>;
  let data3 = <></>;
  let data4 = <></>;
  if (props.data.paidToArr != undefined) {
    data1 = props.data.paidToArr.map((item) => (
      <PayCard
        address={item.address}
        key={item.address}
        amount={item.amount}
      ></PayCard>
    ));
  }
  if (props.data.paidBYArr != undefined) {
    data2 = props.data.paidByArr.map((item) => (
      <PayCard
        address={item.address}
        key={item.address}
        amount={item.amount}
      ></PayCard>
    ));
  }

  if (props.data.loanGivenArr != undefined) {
    data3 = props.data.loanGivenArr.map((item) => (
      <PaymtCard
        address={item.address}
        key={item.address}
        amount={item.amount}
        used={item.amountUsed}
        rate={item.rate}
      ></PaymtCard>
    ));
  }
  if (props.data.loanTakenArr != undefined) {
    data4 = props.data.loanTakenArr.map((item) => (
      <PaymtCard
        address={item.address}
        key={item.address}
        amount={item.amount}
        used={item.amountUsed}
        rate={item.rate}
      ></PaymtCard>
    ));
  }
  return (
    <div className="container-fluid">
      <div>
        {choices == 1 && <AddFunds dontShow={closeModal}></AddFunds>}
        {choices == 6 && <CreateRequest dontShow={closeModal}></CreateRequest>}
        {choices == 3 && <Lend dontShow={closeModal}></Lend>}
        {choices == 2 && <Pay dontShow={closeModal}></Pay>}
        {choices == 5 && <TakeBack dontShow={closeModal}></TakeBack>}
        {choices == 4 && <Withdraw dontShow={closeModal}></Withdraw>}
        {choices == 7 && <ViewRequests dontShow={closeModal}></ViewRequests>}
        {choices == 8 && <SetInterest dontShow={closeModal}></SetInterest>}
      </div>
      <div className="row">
        <div className={`col-1 ${classes.cols} ${classes.sidebar}`}>
          <div onClick={makes1}>
            <img src="https://cdn-icons-png.flaticon.com/128/2900/2900229.png"></img>
          </div>
          <div onClick={makes2}>
            <img src="https://cdn-icons-png.flaticon.com/512/3405/3405812.png"></img>
          </div>
          <div onClick={makes3}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3130/3130602.png"
              className={classes.sp}
            ></img>
          </div>
          <div onClick={makes4}>
            <img src="https://cdn-icons-png.flaticon.com/128/733/733282.png"></img>
          </div>
          <div onClick={makes5}>
            <img src="https://cdn-icons-png.flaticon.com/128/60/60690.png"></img>
          </div>
          <div onClick={makes6}>
            <img src="https://cdn-icons-png.flaticon.com/512/5506/5506179.png"></img>
          </div>
          <div onClick={makes7}>
            <img src="https://cdn-icons-png.flaticon.com/128/2558/2558304.png"></img>
          </div>
          <div onClick={makes8}>
            <img src="https://cdn-icons-png.flaticon.com/128/9132/9132934.png"></img>
          </div>
        </div>
        <div className={`col-md-7 col-s-10 ${classes.cols}`}>
          <div className="row">
            <UserCard
              account={props.data.account[0]}
              balance={props.data.balance}
              totBal={props.data.totalBalance}
            ></UserCard>
          </div>
          <div className="row mt-2 text-center">
            <div
              onClick={make1}
              className={`col-6 ${classes.headings} ${
                choice == 1 && classes.clicked
              }`}
            >
              <h5>PAID TO</h5>
            </div>
            <div
              onClick={make2}
              className={`col-6 ${classes.headings} ${
                choice == 2 && classes.clicked
              }`}
            >
              <h5>RECEIVED FROM</h5>
            </div>
          </div>
          <div className="row mt-2 text-center">
            <div
              onClick={make3}
              className={`col-6 ${classes.headings} ${
                choice == 3 && classes.clicked
              }`}
            >
              <h5>LOAN GIVEN TO</h5>
            </div>
            <div
              onClick={make4}
              className={`col-6 ${classes.headings} ${
                choice == 4 && classes.clicked
              }`}
            >
              <h5>LOAN TAKEN FROM</h5>
            </div>
          </div>
        </div>
        <div className={`col-md-4 ${classes.cols}`}>
          {choice == 1 && props.data.paidToArr.length != 0 && (
            <h4 className="text-center mt-1">RECORDS</h4>
          )}
          {choice == 1 && props.data.paidToArr.length == 0 && (
            <h4 className="text-center mt-1">NO SUCH TRANSACTIONS</h4>
          )}
          {choice == 1 && props.data.paidToArr.length != 0 && data1}
          {choice == 2 && props.data.paidByArr.length != 0 && (
            <h4 className="text-center mt-1">RECORDS</h4>
          )}
          {choice == 2 && props.data.paidByArr.length == 0 && (
            <h4 className="text-center mt-1">NO SUCH TRANSACTIONS</h4>
          )}
          {choice == 2 && props.data.paidByArr.length != 0 && data2}
          {choice == 3 && props.data.loanGivenArr.length != 0 && (
            <h4 className="text-center mt-1">RECORDS</h4>
          )}
          {choice == 3 && props.data.loanGivenArr.length == 0 && (
            <h4 className="text-center mt-1">NO SUCH TRANSACTIONS</h4>
          )}
          {choice == 3 && props.data.loanGivenArr.length != 0 && data3}
          {choice == 4 && props.data.loanTakenArr.length != 0 && (
            <h4 className="text-center mt-1">RECORDS</h4>
          )}
          {choice == 4 && props.data.loanTakenArr.length == 0 && (
            <h4 className="text-center mt-1">NO SUCH TRANSACTIONS</h4>
          )}
          {choice == 4 && props.data.loanTakenArr.length != 0 && data4}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
