import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './icons.module.css'

export default function Icons() {
  return (
    <div className={classes.icons}>
    <div><SocialIcon url='https://www.facebook.com/Google/' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.linkedin.com/company/google/?originalSubdomain=in' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://github.com/abishek023/DePay' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.instagram.com/google/?hl=en' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url="https://cloud.google.com/free?userloc_9154876-network_g" style={{ height: 40, width: 40 }}></SocialIcon></div>
    </div>
  );
}
