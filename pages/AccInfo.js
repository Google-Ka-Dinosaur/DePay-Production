import React from "react";
import { useState, useEffect } from "react";
import classes from "./AccInfo.module.css";
import DePay from "../ethereum/DePay";
import web3 from "../ethereum/web3";
import Loader from "../UI/Loader";
import Footer from "../HomePagecomponents/footer/footer";
import UserPage from "../UserPagecomponents/UserPage";
const AccInfo = () => {
  let i = 0;
  const [data, setData] = useState({
    account:'0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002',
    balance: 0,
    totalBalance: 0,
    paidByNo: 0,
    paidToNo: 0,
    loanGivenNo: 0,
    loanTaken: 0,
    paidToArr: [],
    paidByArr: [],
    loanGivenArr: [],
    loanTakenArr: [],
  });
  useEffect(() => {
    const load = async () => {
      const address = await web3.eth.getAccounts();
      const balance = await DePay.methods.balance(address[0]).call();
      const totalBalance = await DePay.methods
        .totalBalanceIHaveAdded(address[0])
        .call();
      const paidToNo = await DePay.methods
        .numberOfPeopleIPaid(address[0])
        .call();
      const paidByNo = await DePay.methods
        .numberOfPeopleWhoPaidMe(address[0])
        .call();
      const loanGivenNo = await DePay.methods
        .numberOfPeopleWhomIHaveGivenLoan(address[0])
        .call();
      const loanTakenNo = await DePay.methods
        .numberOfPeopleWhoHaveGivenLoanToMe(address[0])
        .call();
      let paidToArr = [];
      let paidByArr = [];
      let loanGivenArr = [];
      let loanTakenArr = [];
      for (i = 0; i < paidToNo; i++) {
        const value = await DePay.methods.paidArr(address[0], i).call();
        const amt = await DePay.methods.paidTo(address[0], value).call();
        paidToArr.push({address:value,amount:amt});
      }

      for (i = 0; i < paidByNo; i++) {
        const value = await DePay.methods.receivedArr(address[0], i).call();
        const amt = await DePay.methods.ReceivedFrom(address[0], value).call();
        paidByArr.push({address:value,amount:amt});
      }

      for (i = 0; i < loanGivenNo; i++) {
        const value = await DePay.methods.loanGivenArr(address[0], i).call();
        const amt = await DePay.methods.given(address[0], value).call();
        const amtUsed = await DePay.methods.used(address[0], value).call();
        loanGivenArr.push({address:value,amount:amt,amountUsed:amtUsed});
      }

      for (i = 0; i < loanTakenNo; i++) {
        const value = await DePay.methods.loanTakenArr(address[0], i).call();
        const amt = await DePay.methods.borrowed(address[0],value).call();
        const amtUsed = await DePay.methods.used(value,address[0]).call();
        loanTakenArr.push({address:value,amount:amt,amountUsed:amtUsed});
      }
      setData({
        account: address,
        balance,
        totalBalance,
        paidByNo,
        paidToNo,
        loanGivenNo,
        loanTakenNo,
        paidToArr,
        paidByArr,
        loanGivenArr,
        loanTakenArr,
      });
    };
    load();
  }, []);

  setInterval(() => {
    const load = async () => {
      const address = await web3.eth.getAccounts();
      const balance = await DePay.methods.balance(address[0]).call();
      const totalBalance = await DePay.methods
        .totalBalanceIHaveAdded(address[0])
        .call();
      const paidToNo = await DePay.methods
        .numberOfPeopleIPaid(address[0])
        .call();
      const paidByNo = await DePay.methods
        .numberOfPeopleWhoPaidMe(address[0])
        .call();
      const loanGivenNo = await DePay.methods
        .numberOfPeopleWhomIHaveGivenLoan(address[0])
        .call();
      const loanTakenNo = await DePay.methods
        .numberOfPeopleWhoHaveGivenLoanToMe(address[0])
        .call();
      let paidToArr = [];
      let paidByArr = [];
      let loanGivenArr = [];
      let loanTakenArr = [];
      for (i = 0; i < paidToNo; i++) {
        const value = await DePay.methods.paidArr(address[0], i).call();
        const amt = await DePay.methods.paidTo(address[0], value).call();
        paidToArr.push({address:value,amount:amt});
      }

      for (i = 0; i < paidByNo; i++) {
        const value = await DePay.methods.receivedArr(address[0], i).call();
        const amt = await DePay.methods.ReceivedFrom(address[0], value).call();
        paidByArr.push({address:value,amount:amt});
      }

      for (i = 0; i < loanGivenNo; i++) {
        const value = await DePay.methods.loanGivenArr(address[0], i).call();
        const amt = await DePay.methods.given(address[0], value).call();
        const amtUsed = await DePay.methods.used(address[0], value).call();
        const interest = await DePay.methods.rate(value,address[0]).call();
        loanGivenArr.push({address:value,amount:amt,amountUsed:amtUsed,rate:interest});
      }

      for (i = 0; i < loanTakenNo; i++) {
        const value = await DePay.methods.loanTakenArr(address[0], i).call();
        const amt = await DePay.methods.borrowed(address[0],value).call();
        const amtUsed = await DePay.methods.used(value,address[0]).call();
        const interest = await DePay.methods.rate(address[0],value).call();
        loanTakenArr.push({address:value,amount:amt,amountUsed:amtUsed,rate:interest});
      }
      setData({
        account: address,
        balance,
        totalBalance,
        paidByNo,
        paidToNo,
        loanGivenNo,
        loanTakenNo,
        paidToArr,
        paidByArr,
        loanGivenArr,
        loanTakenArr,
      });
    };
    load();
  }, 10000);
if(data.account=='0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002')
{
  return(<div className={classes.loadBox}><Loader></Loader></div>)
}
  return (
    <div className={classes.mainBox}>
      <UserPage data={data}></UserPage>
      <Footer></Footer>
    </div>
  );
};

export default AccInfo;


