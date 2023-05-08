import React, {useReducer} from 'react';
import {LEARN_ROUTE, TEST_ROUTE} from "../../../utils/consts";
import SiteCard from "../../siteCard/SiteCard";
import questionsA1 from "../../../data/QuestionsA1";
import {useDispatch, useSelector} from "react-redux";



const SectionA = () => {
    const dispatch = useDispatch()
    // const questions = useSelector(state => state.questions)

    const questionSelect=()=>{
        dispatch({type:"A1"})
    }
    questionSelect()
    return (
        <div>
            {/*<SiteCard*/}
            {/*    route={TEST_ROUTE}*/}
            {/*    // img={imgA1_Background}*/}
            {/*    cardName={'Тест'}*/}
            {/*    onClick={selectedQuestions(questionsA1)}*/}
            {/*/>*/}
            {/*<SiteCard*/}
            {/*    route={LEARN_ROUTE}*/}
            {/*    // img={imgA1_Background}*/}
            {/*    cardName={'Обучение'}*/}
            {/*    onClick={selectedQuestions}*/}
            {/*/>*/}
            {/*<button onClick={questionSelect}>test</button>*/}
        </div>
    );
};

export default SectionA;