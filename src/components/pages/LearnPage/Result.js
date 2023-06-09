import React from 'react';
import classes from "../TestPage.module.css";
import Button from "../../UI/button/Button";
import QuestionsNav from "./QuestionsNav";

const Result = ({handleReset,rightAnswers,questions,handleQuestion, wrongAnswered}) => {


    return (
        <div className={classes.LayoutContainer}>
            <QuestionsNav
                rightAnswers={rightAnswers}
                questions={questions}
                handleQuestion={handleQuestion}
                wrongAnswered={wrongAnswered}
            />
            <h3>Вы ответили верно на {rightAnswers.length} из {questions.length}</h3>
            {/*<h3>Хотите пройти тест заново или просмотреть ошибки?</h3>*/}
            <Button onClick={handleReset}>Заново</Button>
            {/*<Button onClick={showMistakes}>Посмотреть ошибки</Button>*/}
        </div>
    );
};

export default Result;