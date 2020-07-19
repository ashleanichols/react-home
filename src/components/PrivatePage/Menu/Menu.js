import React from 'react'
import Icons from './Icons'
import Logo from './Logo'
import styles from "../styles/dashboard.module.css";
import {Link} from 'react-router-dom'
const Menu = ({isLogged, user}) => {
    return (
        <nav className={styles["vertical-menu-wrapper"]}>
        <Logo />
         <ul className={styles["vertical-menu"]}>
           <span id={styles["social"]}>
           <Link to='/'><Icons image={require("../../../static/images/dashboard.png")} name="Dashboard"/></Link> 
             <Link to='/interior'><Icons image={require("../../../static/images/interior.png")} name="Interior Design"/></Link> 
             <Icons image={require("../../../static/images/energy.png")} name="Home Automation"/>
             <hr />
             <li className={styles["dash-li"]}>Setting</li>
             <li className={styles["dash-li"]}>Privacy</li>
             {isLogged && <Link to="/logout" className={styles["logout"]}>Logout</Link>}
             <li id={styles["user-info"]}>
               <span>online</span>
               <span>{user}</span>
             </li>
           </span>
         </ul>
       </nav>
    )
}
export default Menu