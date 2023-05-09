import React, {useEffect, useState} from 'react';
import classes from "../TestPage.module.css";
import Button from "../../UI/button/Button";
import QuestionContainer from "./QuestionContainer";
import {useSelector} from "react-redux";


const LearnPage = () => {
        const [value, setValue] = useState('')
        const [currentQuestion, setCurrentQuestion] = useState(0)
        const [rightAnswers, setRightAnswers] = useState([])
        const [showResult, setShowResult] = useState(false)
        const [help, setHelp] = useState(false)
        const [notAnswered, setNotAnswered] = useState([])
        const questions = useSelector(state => state.questions)

        useEffect(() => {
            let x = []
            questions.forEach((i, index) => {
                x.push(index)
            })
            setNotAnswered(x)
        }, [showResult])

        const handleAnswerQuestionClick = event => {
            event.preventDefault()
            if (value === questions[currentQuestion].isCorrect) {
                setRightAnswers([...rightAnswers, currentQuestion])
            }
            setValue('')
            setHelp(false)
            setNotAnswered(notAnswered.filter(num => num !== currentQuestion))
            if (notAnswered.length === 1) {
                setShowResult(true)
            }
            handleSkipQuestion(event)
        }

        const handleSkipQuestion = event => {
            setValue('')
            setHelp(false)
            for (let nextQuestion = currentQuestion + 1; nextQuestion <= questions.length; nextQuestion++) {
                if (notAnswered.includes(nextQuestion)) {
                    setCurrentQuestion(nextQuestion)
                    break
                } else {
                    for (let nextQuestion = notAnswered[0]; nextQuestion < questions.length; nextQuestion++) {
                        if (notAnswered.includes(nextQuestion)) {
                            setCurrentQuestion(nextQuestion)
                            break
                        }
                    }
                }
            }
        }

        const handleAnswerClick = (index) => {
            setValue(index)
        }

        const handleReset = () => {
            setCurrentQuestion(0)
            setShowResult(false)
            setRightAnswers([])
        }

        return (
            (showResult
                ?
                <div className={classes.LayoutContainer}>
                    <h3>{rightAnswers.length}/{questions.length}</h3>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                :
                <div className={classes.LayoutContainer}>
                    <li className={classes.questionsList}>
                        {questions.map((i, index) => (
                            <Button onClick={() => setCurrentQuestion(index)} key={index}>{index + 1}</Button>
                        ))}
                    </li>
                    <QuestionContainer
                        questions={questions}
                        currentQuestion={currentQuestion}
                        answerClick={handleAnswerClick}
                        skip={handleSkipQuestion}
                        answerValue={value}
                        help={help}
                        setHelp={setHelp}
                        submit={handleAnswerQuestionClick}
                    />
                </div>)
        );
    }
;

export default LearnPage;