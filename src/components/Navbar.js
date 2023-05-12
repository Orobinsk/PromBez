import React from 'react';
import classes from "./Navbar.module.css";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import NavButton from "./UI/button/NavButton";

const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.LayoutContainer}>
                <Link to={HOME_ROUTE}><NavButton style={{fontSize: '26px'}}>Промышлення безопасность</NavButton></Link>
                <div className={classes.spaceBetween}></div>
                <Link to={LOGIN_ROUTE}><NavButton>Экзамен</NavButton></Link>
                <Link to={LOGIN_ROUTE}><NavButton>Поиск</NavButton></Link>
                <Link to={LOGIN_ROUTE}><NavButton>Войти</NavButton></Link>
            </div>
        </div>
    );
};

export default Navbar;