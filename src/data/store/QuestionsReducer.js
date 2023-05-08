import questionsA1 from "../QuestionsA1";
import questionsB1_1 from "../QuestionsB1_1";

const defaultState={
    questions: questionsA1,
}

const questionReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'A1':
            return {questions: questionsA1}
        case 'B1_1':
            return {questions: questionsB1_1}
        default: {
            return state
        }
    }
}

export default questionReducer