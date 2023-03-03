import { useRouter } from 'next/router'
import { useState } from "react";
import classes from "./Navigation.module.css";
const Navigation = (props) => {
  // console.log(props);
    const router=useRouter();
  const [choice, setChoice] = useState(()=>{
    const path=router.asPath;
    if(path=='/')
    return(8);
    if(path=='/TransactionHistory')
    return(9);
    if(path=='/AccInfo')
    return(10);
  });
  const [clicked, setClicked] = useState(()=>{
    const path=router.asPath;
    if(path=='/')
    return(8);
    if(path=='/TransactionHistory')
    return(9);
    if(path=='/AccInfo')
    return(10);
  });
  const make8 = () => {
    setChoice(8);
    setClicked(8);
    router.push("/");
  };
  const make9 = () => {
    setChoice(9);
    setClicked(9);
    router.push("/TransactionHistory");
  };
  const make10 = () => {
    setChoice(10);
    setClicked(10);
    router.push("/AccInfo");
  };
  const closeModal = () => {
    setChoice(()=>{
        const path=router.asPath;
        if(path=='/')
        return(8);
        if(path=='/TransactionHistory')
        return(9);
        if(path=='/AccInfo')
        return(10);
      });
    setClicked(()=>{
        const path=router.asPath;
        if(path=='/')
        return(8);
        if(path=='/TransactionHistory')
        return(9);
        if(path=='/AccInfo')
        return(10);
      });
  };
  return (
    <>
        <div className={classes.box}>
        <div className={classes.item}>
        <button
            className={`${classes.button} ${
              clicked == 8 && classes.buttonClicked
            }`}
            onClick={make8}
          >
            Home
          </button>
        </div>
        <div className={classes.item}>
        <button
            className={`${classes.button} ${
              clicked == 9 && classes.buttonClicked
            }`}
            onClick={make9}
          >
            History
          </button>
        </div>
        {props.connected&&  <div className={classes.item}>
        <button
            className={`${classes.button} ${
              clicked == 10 && classes.buttonClicked
            }`}
            onClick={make10}
          >
            Account Info
          </button>
        </div>}
        <div className={classes.item}>
        <button
            className={`${classes.button}`}
            onClick={props.close}
          >
            Close
          </button>
        </div>
        </div>
    </>
  );
};
export default Navigation;
