import React from 'react';
import classes from "./NavButton.module.css";

const NavButton = ({children, ...props}) => {
    return (
        <button className={classes.NavBtn} {...props} >
            {children}
        </button>
    );
};

export default NavButton;