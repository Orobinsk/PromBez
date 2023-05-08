import React from 'react';
import classes from './SiteCard.module.css'
import Button from "../UI/button/Button";
import {useNavigate} from "react-router-dom";

const SiteCard = ({children, cardName, questions,...props}) => {

    const navigate = useNavigate()

    return (
        <div className={classes.card} questions={questions} onClick={() => navigate(props.route)}>
            <img className={classes.img_label} src={props.img} ></img>
            <span>{cardName}</span>
            {children}
        </div>
    );
};

export default SiteCard;