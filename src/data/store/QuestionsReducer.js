import questionsA1 from "../QuestionsA1";
import questionsB1_1 from "../QuestionsB1_1";



const questionReducer = (state, action) => {
    switch (action.type) {
        case 'A1':
            return {question: questionsA1}
        case 'B1_1':
            return {state: questionsB1_1}
        default: {
            throw Error('questions hasn\'t selected');
        }
    }
}

export default questionReducer