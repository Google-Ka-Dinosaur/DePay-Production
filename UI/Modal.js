import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div onClick={props.dontShow}className={classes.Backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
        <Backdrop dontShow={props.dontShow}></Backdrop>,
        <Overlay>{props.children}</Overlay>,
    </>
  );
};
export default Modal;
