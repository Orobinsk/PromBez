import React from 'react';
import classes from './SiteCard.module.css'
import {useNavigate} from "react-router-dom";

const SiteCard = ({children, cardName, questions, route,...props}) => {

    const navigate = useNavigate()
    const questionsSelect=(route,questions)=>{
        navigate(route)
          questions()
    }

    return (
        <div className={classes.card}  onClick={() => questionsSelect(route,questions)}>
            <span>{cardName}</span>
            {children}
        </div>
    );
};

export default SiteCard;