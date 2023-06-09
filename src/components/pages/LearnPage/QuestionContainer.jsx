import React from 'react';
import classes from "../TestPage.module.css";
import Button from "../../UI/button/Button";
import QuestionsNav from "./QuestionsNav";


function answers(questions,currentQuestion,answerValue,answerClick, notAnswered){
    if (notAnswered.includes(currentQuestion)) return questions[currentQuestion].answerOptions.map((item, index) => (
        questions[currentQuestion].isCorrect===index?
            <li key={Math.random()}>
                <label onClick={e => answerClick(index, e)}>
                    <input
                        type="radio"
                        name="answers"
                        checked={answerValue === index}
                        onChange={e => answerClick(index, e)}
                    />
                    <span>{item.answerText}</span>
                </label>
            </li>
            :
            <li key={Math.random()}>
                <label onClick={e => answerClick(index, e)}>
                    <input
                        type="radio"
                        name="answers"
                        checked={answerValue === index}
                        onChange={e => answerClick(index, e)}
                    />
                    <span>{item.answerText}</span>
                </label>
            </li>

    ))
   else return questions[currentQuestion].answerOptions.map((item, index) => (
       questions[currentQuestion].isCorrect===index?
           <li style={{background:"green"}} key={Math.random()}>
               <label onClick={e => answerClick(index, e)}>
                   <input
                       type="radio"
                       name="answers"
                       checked={answerValue === index}
                       onChange={e => answerClick(index, e)}
                   />
                   <span>{item.answerText}</span>
               </label>
           </li>
           :
           <li key={Math.random()}>
               <label onClick={e => answerClick(index, e)}>
                   <input
                       type="radio"
                       name="answers"
                       checked={answerValue === index}
                       onChange={e => answerClick(index, e)}
                   />
                   <span>{item.answerText}</span>
               </label>
           </li>

    ))
}

const QuestionContainer = (
    {
        questions,
        currentQuestion,
        answerClick,
        skip,
        answerValue,
        help,
        setHelp,
        submit,
        rightAnswers,
        notAnswered,
        handleQuestion,
        wrongAnswered,
        setNotAnswered,
        setWrongAnswered
    }) => {
function helping(){
    setHelp(!help)
    setNotAnswered(notAnswered.filter(num => num !== currentQuestion))
    setWrongAnswered([...wrongAnswered, currentQuestion])
}

    return (
        <div className={classes.LayoutContainer}>
            <QuestionsNav
                rightAnswers={rightAnswers}
                questions={questions}
                notAnswered={notAnswered}
                handleQuestion={handleQuestion}
                wrongAnswered={wrongAnswered}
            />
            <h3 id="quiz-label">{questions[currentQuestion].questionsText}</h3>
            <ul className={classes.answers}>
                {answers(questions,currentQuestion,answerValue,answerClick,notAnswered)}
            </ul>
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
                <Button  onClick={helping}>Узнать ответ</Button>
                {notAnswered.includes(currentQuestion)?<Button type='submit' onClick={submit}>Ответить</Button>:<></>}
                <Button type='submit' onClick={skip}>Следующий</Button>
            </div>
            <div>
                {help && <h4>{questions[currentQuestion].comment}</h4>}
            </div>
        </div>
    );
};

export default QuestionContainer;