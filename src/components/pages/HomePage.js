import React from 'react';
import {SECTION_A_ROUTE, SECTION_B1_ROUTE, TEST_ROUTE} from "../../utils/consts";
import imgA1_Background from '../../data/img/A1_background.jpeg'
import SiteCard from "../siteCard/SiteCard";
import classes from "./HomePage.module.css"

const HomePage = () => {


    return (
        <div className={classes.LayoutContainer}>
            <h1>Экзамен по промышленной безопасности</h1>
            <ul>
                <li>Качественная и быстрая подготовка кандидатов</li>
                <li>Актуальные базы вопросов</li>
            </ul>
            <div className={classes.sideCards}>
                <SiteCard
                    // ЗАМЕНИТЬ НА ДРУГИЕ карточки
                    route={SECTION_A_ROUTE}
                    cardName={'А.1. Основы промышленной безопасности'}
                    img={imgA1_Background}
                />
                <SiteCard
                    route={SECTION_B1_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'}
                />
                <SiteCard
                    route={TEST_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б.2. Требования промышленной безопасности в нефтяной и газовой промышленности'}
                />
                <SiteCard
                    route={TEST_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б.3. Требования промышленной безопасности в металлургической промышленности'}
                />
            </div>
        </div>
    );
};

export default HomePage;