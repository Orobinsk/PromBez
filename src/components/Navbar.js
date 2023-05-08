import React from 'react';
import classes from "./Navbar.module.css";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <div></div>

            <h1 className={classes.homeBtn}><Link to={HOME_ROUTE}>Home</Link></h1>
            <h1 className={classes.loginBtn}><Link to={LOGIN_ROUTE}>login</Link></h1>
        </div>
    );
};

export default Navbar;