import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './icons.module.css'

export default function Icons() {
  return (
    <div className={classes.icons}>
    <div><SocialIcon url='https://www.facebook.com/advaita.iiit/' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.linkedin.com/company/iiit-bhubaneswar/' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://github.com/abishek023/DePay' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.instagram.com/advaita_iiitbh/' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url="https://advaita-iiitbh.in/" style={{ height: 40, width: 40 }}></SocialIcon></div>
    </div>
  );
}