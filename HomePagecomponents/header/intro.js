import React from 'react';
import classes from './intro.module.css'

const Intro = props =>{
    return(
    <div className={classes.info}>
        <div className={classes.text}>
            <h1>Welcome to Depay!!!</h1>
            <h5>Experience the Joy of Happy and Safe transactioning !</h5>
            <p>
            In this era where fraudulent has become so common, we bring to you the solution to your worries. DePay is a secured transaction site 
            which will help you in tension-free transaction. We bring to you the best possible safest options of payment. This whill not only lighten 
            your burden but also provide you the best user-experience. So, come on board with us and enjoy the experience of smooth transactioning !
            </p>
        </div>
        <div className={classes.image}>
            <img src="https://i.ibb.co/k4r7Lzq/37723270-removebg-preview.png" />
        </div>
      </div>
    )
}

export default Intro;
