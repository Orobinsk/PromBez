import React from 'react';
import {SECTION_ROUTE} from "../../utils/consts";
import SiteCard from "../UI/siteCard/SiteCard";
import classes from "./Page.module.css"
import {useDispatch} from "react-redux";
import {IconA1, IconB1, IconB2, IconB3} from "../UI/SiteCardIcon/SiteCardIcons";
import {setSection} from "../../data/store/QuestionsReducer";

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
                    route={SECTION_ROUTE+'A1'}
                    cardName={'A.1 Общие требования по промышленной безопасности'}
                    section={() => dispatch(setSection("A1"))}
                >
                    {IconA1}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE+"B1"}
                    cardName={'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'}
                    section={() => dispatch(setSection("B1"))}
                >
                    {IconB1}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE+"B2"}
                    cardName={'Б.2. Требования промышленной безопасности в нефтяной и газовой промышленности'}
                    section={() => dispatch(setSection("B2"))}
                >
                    {IconB2}
                </SiteCard>
                <SiteCard
                    route={SECTION_ROUTE+"B3"}
                    cardName={'Б.3. Требования промышленной безопасности в металлургической промышленности'}
                    section={() => dispatch(setSection("B3"))}
                >
                    {IconB3}
                </SiteCard>
            </div>
        </div>
    );
};

export default HomePage;