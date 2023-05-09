import React from 'react';
import classes from "./Navbar.module.css";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import NavButton from "./UI/button/NavButton";

const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.LayoutContainer}>
                <NavButton ><Link to={HOME_ROUTE}>Промышлення безопасность</Link></NavButton>
                <div className={classes.spaceBetween}></div>
                <NavButton ><Link to={LOGIN_ROUTE}>Экзамен</Link></NavButton>
                <NavButton ><Link to={LOGIN_ROUTE}>Поиск</Link></NavButton>
                <NavButton ><Link to={LOGIN_ROUTE}>Войти</Link></NavButton>
            </div>
        </div>
    );
};

export default Navbar;