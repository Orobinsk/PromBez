import React, {useEffect, useRef, useState} from 'react';
import classes from './TestPage.module.css'
import QuestionsA1 from "../../data/QuestionsA1";
import questions from "../../data/QuestionsA1";
import Button from "../UI/button/Button";

const TestPage = () => {
    const [value, setValue] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleNextQuestionClick = event => {
        console.log(score)
        event.preventDefault()
        if (value === QuestionsA1[currentQuestion].isCorrect) {
            setScore(score + 1)
        }
        setValue('')
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            console.log('вопросы закончились')
            setShowResult(true)
            setValue('')
        }
    }


    const handleAnswerClick = (index, e) => {
        setValue(index)
    }

    const handleResetTest = () => {
        setScore(0)
        setCurrentQuestion(0)
        setShowResult(false)

    }

    return (
        (showResult
            ?
            <div className={classes.container}>
                <h3>{score}/{questions.length}</h3>
                <Button onClick={handleResetTest}>Reset</Button>
            </div>
            :
            <div className={classes.container}>
                <h1>Timer 10 min</h1>
                <h3 id="quiz-label">{QuestionsA1[currentQuestion].questionsText}</h3>
                <ul className={classes.answers}>
                    {QuestionsA1[currentQuestion].answerOptions.map((item, index) => (
                        <li key={Math.random()}>
                            <label onClick={e => handleAnswerClick(index, e)}>
                                <input
                                    type="radio"
                                    name="answers"
                                    checked={value === index}
                                    onChange={e => handleAnswerClick(index, e)}
                                /> <span>{item.answerText}</span>
                            </label>
                        </li>
                    ))}

                    <Button type='submit' onClick={handleNextQuestionClick}>Ответить</Button>

                </ul>

            </div>)
    );

};

export default TestPage;