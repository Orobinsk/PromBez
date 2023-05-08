import React, {useState} from 'react';
import {SECTION_A_ROUTE, TEST_ROUTE} from "../../utils/consts";
import imgA1_Background from '../../data/img/A1_background.jpeg'
import SiteCard from "../siteCard/SiteCard";
import classes from "./HomePage.module.css"

const HomePage = () => {

    const[value,setValue]=useState()

    return (
        <div className={classes.LayoutContainer}>
            <h1>Экзамен по промышленной безопасности</h1>
            <ul>
                <li>Качественная и быстрая подготовка кандидатов</li>
                <li>Актуальные базы вопросов</li>
            </ul>
            <div className={classes.sideCards}>
                <SiteCard
                    route={SECTION_A_ROUTE}
                    cardName={'А.1. Основы промышленной безопасности. Вопросы с ответами (тесты) 2023 год.'}
                    img={imgA1_Background}
                />
                <SiteCard
                    route={TEST_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б. Основы промышленной безопасности. Вопросы с ответами (тесты) 2023 год.'}
                />
                <SiteCard
                    route={TEST_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б2. Основы промышленной безопасности. Вопросы с ответами (тесты) 2023 год.'}
                />
                <SiteCard
                    route={TEST_ROUTE}
                    img={imgA1_Background}
                    cardName={'Б3. Основы промышленной безопасности. Вопросы с ответами (тесты) 2023 год.'}
                />
            </div>

        </div>
    );
};

export default HomePage;