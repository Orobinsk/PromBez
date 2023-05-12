import React from 'react';
import classes from './SiteCard.module.css'
import {useNavigate} from "react-router-dom";

const SiteCard = ({children, cardName, questions, route, section,...props}) => {

    const navigate = useNavigate()
    const questionsSelect=(route,questions,section)=>{
        navigate(route)
         if (questions){
             questions()
         }
        if (section){
            section()
        }
    }

    return (
        <div className={classes.card}  onClick={() => questionsSelect(route,questions,section)}>
            <div className={classes.icons}>{children}</div>
            <span>{cardName}</span>
        </div>
    );
};

export default SiteCard;