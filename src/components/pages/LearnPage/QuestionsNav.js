import React from 'react';
import classes from "../TestPage.module.css";
import Button from "../../UI/button/Button";

const QuestionsNav = ({questions, handleQuestion,rightAnswers,notAnswered}) => {
    return (
            <li className={classes.questionsList}>
                {/*{questions.map((i, index) => (*/}
                {/*         <Button onClick={() => handleQuestion(index)} key={index}>{index + 1}</Button>*/}
                {/*))}*/}
                {questions.map((i, index) => {
                    if(rightAnswers.includes(index)){
                        return <Button onClick={() => handleQuestion(index)} key={index} style={{backgroundColor: 'green'}}>{index + 1}</Button>
                    } else if (!rightAnswers.includes(index) && !notAnswered.includes(index)) {
                        return <Button onClick={() => handleQuestion(index)} key={index}style={{backgroundColor: 'red'}}>{index + 1}</Button>
                    }else return <Button onClick={() => handleQuestion(index)} key={index}>{index + 1}</Button>
                    }


                    )}
                {/*{questions.filter((e, index) => rightAnswers.includes(index)).map((filteredQuestions,index) =>(*/}
                {/*    <Button onClick={() => handleQuestion(filteredQuestions)} key={filteredQuestions}>{index+1}</Button>*/}
                {/*))}*/}
            </li>
    );
};

export default QuestionsNav;