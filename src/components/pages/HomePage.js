import React from 'react';
import {SECTION_ROUTE, SECTION_B1_ROUTE, TEST_ROUTE} from "../../utils/consts";
import SiteCard from "../siteCard/SiteCard";
import classes from "./Page.module.css"
import {useDispatch} from "react-redux";
import {IconA1, IconB1, IconB2, IconB3} from "../UI/SiteCardIcon/SiteCardIcons";

const HomePage = () => {

    const dispatch = useDispatch()

    return (
        <div className={classes.LayoutContainer}>
            <h1>Экзамен по промышленной безопасности</h1>
            <ul>
                <li>Качественная и быстрая подготовка кандидатов</li>
                <li>Актуальные базы вопросов</li>
            </ul>
            <div className={classes.sideCards}>
                <SiteCard
                    route={SECTION_ROUTE}
                    cardName={'А.1. Основы промышленной безопасности'}
                    section={() => dispatch({type: "A1"})}
                >
                    {IconA1}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE}
                    cardName={'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'}
                    section={() => dispatch({type: "B1"})}
                >
                    {IconB1}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE}
                    cardName={'Б.2. Требования промышленной безопасности в нефтяной и газовой промышленности'}
                >
                    {IconB2}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE}
                    cardName={'Б.3. Требования промышленной безопасности в металлургической промышленности'}
                >
                    {IconB3}
                </SiteCard>
            </div>
        </div>
    );
};

export default HomePage;