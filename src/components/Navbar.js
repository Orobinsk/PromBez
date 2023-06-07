import React, {useState} from 'react';
import classes from "./Navbar.module.css";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import NavButton from "./UI/button/NavButton";


const Navbar = () => {
    const [active, setActive] = useState(false)


    return (
        <div className={classes.wrapper}>
            <div className={classes.menu}>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={HOME_ROUTE}><NavButton style={{fontSize: '26px'}}>Промышлення
                        безопасность</NavButton></Link>
                    <div className={classes.burgerBtn} onClick={() => setActive(!active)}>
                        <span/>
                    </div>
                </div>
                <div className={classes.spaceBetween}></div>
                <ul className={active ? classes.listActive : classes.list}>
                    <li>
                        <Link to={LOGIN_ROUTE}><NavButton>Экзамен</NavButton></Link>
                    </li>
                    <li>
                        <Link to={LOGIN_ROUTE}><NavButton>Поиск</NavButton></Link>
                    </li>
                    <li>
                        <Link to={LOGIN_ROUTE}><NavButton>Войти</NavButton></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;