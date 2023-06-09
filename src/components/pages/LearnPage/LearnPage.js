import React, {useEffect, useState} from 'react';
import QuestionContainer from "./QuestionContainer";
import {useDispatch, useSelector} from "react-redux";
import Result from "./Result";
import {useParams} from "react-router-dom";
import {setSection} from "../../../data/store/QuestionsReducer";

function totalQuestions(questions) {
    const totalQuestion = []
    questions.forEach((i, index) => {
        totalQuestion.push(index)
    })

}

const LearnPage = () => {
        const [value, setValue] = useState('')
        const [currentQuestion, setCurrentQuestion] = useState(0)
        const [rightAnswers, setRightAnswers] = useState([])
        const [wrongAnswered, setWrongAnswered] = useState([])
        const [showResult, setShowResult] = useState(false)
        const [help, setHelp] = useState(false)
        const [notAnswered, setNotAnswered] = useState([])
        const {questions} = useSelector(state => state.sectionReducer)
        const {mainSectionType} = useSelector(state => state.sectionReducer)
        const dispatch = useDispatch()
        const params = useParams()

        if (mainSectionType !== params.type) {
            dispatch(setSection(params.type))
        } else

            totalQuestions(questions)
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
            } else setWrongAnswered([...wrongAnswered, currentQuestion])
            setNotAnswered(notAnswered.filter(num => num !== currentQuestion))
        }

        const handleSkipQuestion = event => {
            setValue('')
            setHelp(false)
            if (notAnswered.length === 0) {
                setShowResult(true)
            }
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
            setWrongAnswered([])
            // totalQuestions()
        }
        const handleQuestionNav = (index) => {
            setCurrentQuestion(index)
            setHelp(false)
        }
        const showMistakes = () => {
            setCurrentQuestion(0)
            setShowResult(false)
            setNotAnswered([])
        }

        return (
            (showResult
                    ?
                    <Result
                        handleReset={handleReset}
                        rightAnswers={rightAnswers}
                        questions={questions}
                        notAnswered={notAnswered}
                        handleQuestion={handleQuestionNav}
                        wrongAnswered={wrongAnswered}
                        showMistakes={showMistakes}
                    />
                    :
                    <QuestionContainer
                        questions={questions}
                        currentQuestion={currentQuestion}
                        answerClick={handleAnswerClick}
                        skip={handleSkipQuestion}
                        answerValue={value}
                        help={help}
                        setHelp={setHelp}
                        submit={handleAnswerQuestionClick}
                        rightAnswers={rightAnswers}
                        notAnswered={notAnswered}
                        handleQuestion={handleQuestionNav}
                        wrongAnswered={wrongAnswered}
                        handleReset={handleReset}
                        setNotAnswered={setNotAnswered}
                        setWrongAnswered={setWrongAnswered}
                    />

            )
        );
    }
;

export default LearnPage;