import React from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import {useDispatch, useSelector} from "react-redux";
import classes from "../Page.module.css";
import Button from "../../UI/button/Button";


const Sections = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    // const questionsSelect = () => {
    //     dispatch({type: "A1"})
    // }
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
                    <Button key={index}>{i.section}</Button>
                    // <SiteCard
                    // route={LEARN_ROUTE}
                    // cardName={'Обучение'}
                    // // questions={questionsSelect}
                    // />
                ))}
            </div>
        </div>
    );
};

export default Sections;