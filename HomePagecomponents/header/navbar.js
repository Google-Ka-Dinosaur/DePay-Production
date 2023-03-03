import React,{useState} from 'react';
import Navigation from '../../UI/Navigation';
import classes from './navbar.module.css'
import { useRouter } from 'next/router'
import NavModal from '../../UI/NavModal';
const NavBar = props =>{
    const router = useRouter();
    const [show, setShow] = useState(true);
  const changeShow = () => {
    setShow(prevShow=>!prevShow);
  };
    const change=()=>{
        router.push('./');
    }
// console.log(props.connected);
    return(
        <>
        <div className = {classes.nav}>
            <div className={classes.box}>
                <img onClick={change} className={classes.image} src="https://i.ibb.co/ftkmQvB/De-Pay-removebg-preview.png"  alt="logo" border="0" />
            </div>
            <div className={classes.box}>
               {!props.connected&& <button onClick={props.connect} className={classes.button}>Connect</button>}
      {show&&<button className={classes.button} onClick={changeShow}>+</button>}
      {!show&&<NavModal dontShow={changeShow}><Navigation connected={props.connected} close={changeShow}></Navigation></NavModal>}
            </div>
            </div>
            </>
    )
}

export default NavBar