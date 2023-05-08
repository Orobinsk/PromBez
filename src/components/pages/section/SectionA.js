import React from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import {useDispatch} from "react-redux";




const SectionA = () => {
     const dispatch = useDispatch()
     const questionsSelect=()=> {
          dispatch({type:"A1"})
     }

    return (
        <div>
            <SiteCard
                route={TEST_ROUTE}
                cardName={'Тест'}
                questions={questionsSelect}
            />
            <SiteCard
                route={LEARN_ROUTE}
                cardName={'Обучение'}
                questions={questionsSelect}
            />
        </div>
    );
};

export default SectionA;