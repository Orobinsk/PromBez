import React from 'react';
import classes from "../TestPage.module.css";
import Button from "../../UI/button/Button";

const QuestionContainer = (
    {
        questions,
        currentQuestion,
        answerClick,
        skip,
        answerValue,
        help,
        setHelp,
        submit
    }) => {
    return (
        <div>
            <h3 id="quiz-label">{questions[currentQuestion].questionsText}</h3>
            <ul className={classes.answers}>
                {questions[currentQuestion].answerOptions.map((item, index) => (
                    <li key={Math.random()}>
                        <label onClick={e => answerClick(index, e)}>
                            <input
                                type="radio"
                                name="answers"
                                checked={answerValue === index}
                                onChange={e => answerClick(index, e)}
                            /> <span>{item.answerText}</span>
                        </label>
                    </li>
                ))}
                <Button type='submit' onClick={skip}>Пропустить</Button>
                <Button type='submit' onClick={submit}>Ответить</Button>
                <Button onClick={() => setHelp(true)}>Узнать ответ</Button>
            </ul>
            <div>
                {help && <h4>{questions[currentQuestion].comment}</h4>}
            </div>
        </div>
    );
};

export default QuestionContainer;