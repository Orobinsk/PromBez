import React, {useEffect} from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import {useDispatch, useSelector} from "react-redux";
import classes from "../Page.module.css";
import Button from "../../UI/button/Button";
import {useParams} from "react-router-dom";


const Sections = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const params = useParams()


        if (state.sectionType !== params.type){
            dispatch({type: params.type})
        }else
    return (
        <div className={classes.LayoutContainer}>
            <h1>{state.mainSection}</h1>
            <div className={classes.sideCards}>
                <SiteCard
                    route={TEST_ROUTE}
                    cardName={'Тест'}
                    // questions={questionsSelect}
                />
                <SiteCard
                    route={LEARN_ROUTE}
                    cardName={'Обучение'}
                    // questions={questionsSelect}
                />
                {state.sectionNames.map((i, index) => (
                    <SiteCard
                        key={index}
                        route={LEARN_ROUTE}
                        cardName={i.section}
                        // questions={questionsSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sections;