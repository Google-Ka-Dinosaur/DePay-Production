import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>Amount </label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});
export default Input;
