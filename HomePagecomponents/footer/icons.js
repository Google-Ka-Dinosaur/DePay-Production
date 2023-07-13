import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './icons.module.css'

export default function Icons() {
  return (
    <div className={classes.icons}>
    <div><SocialIcon url='https://www.facebook.com' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.linkedin.com' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://github.com/abishek023/DePay' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url='https://www.instagram.com' style={{ height: 40, width: 40 }}></SocialIcon></div>
    <div><SocialIcon url="https://www.google.com/search?q=iiit+bhubaneshwar&oq=iiit+bhubaneshwar&aqs=chrome..69i57.5968j0j1&sourceid=chrome&ie=UTF-8" style={{ height: 40, width: 40 }}></SocialIcon></div>
    </div>
  );
}
