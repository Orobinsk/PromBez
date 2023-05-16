import React from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import {useDispatch, useSelector} from "react-redux";
import classes from "../Page.module.css";
import {useParams} from "react-router-dom";


const Sections = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const params = useParams()


        if (state.type !== params.type) {
        dispatch({type: params.type})
        } else

    return (
        <div className={classes.LayoutContainer}>
            <h1>{state.section.mainSectionName}</h1>
            <div className={classes.sideCards}>
                <SiteCard
                    route={TEST_ROUTE}
                    cardName={'Тест'}
                />
                <SiteCard
                    route={LEARN_ROUTE}
                    cardName={'Обучение'}
                />
                {state.section.sections.map((section, index) => (
                    <SiteCard
                        key={index}
                        route={LEARN_ROUTE+section.sectionType}
                        cardName={section.name}
                        section={() => dispatch({type: section.sectionType})}
                    />
                 ))}
            </div>
        </div>
    );
};

export default Sections;