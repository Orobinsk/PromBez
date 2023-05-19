import React from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import {useDispatch, useSelector} from "react-redux";
import classes from "../Page.module.css";
import {useParams} from "react-router-dom";
import {setSection} from "../../../data/store/QuestionsReducer";


const Sections = () => {

    const {mainSectionName, mainSectionType,sections} =useSelector(state=>state.sectionReducer)
    const dispatch = useDispatch()
    const params = useParams()

        if (mainSectionType !== params.type) {
        dispatch(setSection(params.type))
        } else

    return (
        <div className={classes.LayoutContainer}>
            <h1>{mainSectionName}</h1>
            <div className={classes.sideCards}>
                <SiteCard
                    route={TEST_ROUTE}
                    cardName={'Тест'}
                />
                <SiteCard
                    route={LEARN_ROUTE}
                    cardName={'Обучение'}
                />
                {sections.map((section, index) => (
                    <SiteCard
                        key={index}
                        route={LEARN_ROUTE+section.sectionType}
                        cardName={section.name}
                        section={() => dispatch(setSection(section.sectionType))}
                    />
                 ))}
            </div>
        </div>
    );
};

export default Sections;