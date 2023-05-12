import React, {useState} from 'react';
import classes from './TestPage.module.css';
import Button from "../UI/button/Button";
import {useSelector} from "react-redux";

const TestPage = () => {
    const [value, setValue] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const questions = useSelector(state => state.questions)


    const handleNextQuestionClick = event => {
        console.log(score)
        event.preventDefault()
        if (value === questions[currentQuestion].isCorrect) {
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


    const handleAnswerClick = (index) => {
        setValue(index)
    }

    const handleReset = () => {
        setScore(0)
        setCurrentQuestion(0)
        setShowResult(false)

    }

    return (
        (showResult
            ?
            <div className={classes.LayoutContainer}>
                <h3>{score}/{questions.length}</h3>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            :
            <div className={classes.LayoutContainer}>
                <h1>Timer 10 min</h1>
                <h3 id="quiz-label">{questions[currentQuestion].questionsText}</h3>
                <ul className={classes.answers}>
                    {questions[currentQuestion].answerOptions.map((item, index) => (
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