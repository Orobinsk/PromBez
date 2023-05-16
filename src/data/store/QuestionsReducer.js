import questionsA1 from "../questions/QuestionsA1";
import questionsB1_1 from "../questions/QuestionsB1_1";
import SectionA1 from "../sectionsName/SectionA1";
import {sectionB1} from "../sectionsName/SectionB1";
import questionsB1_2 from "../questions/QuestionsB1_2";


// const AllQuestions = [...questionsA1, ...questionsB1_1]


const questionReducer = (state = SectionA1, action) => {
    switch (action.type) {
        case 'A1':
            return {
                section: SectionA1,
                type:"A1",
                questions: questionsA1,
            }
        case 'B1':
            return {
                section: sectionB1,
                type:"B1",
                questions:[...questionsA1, ...questionsB1_1],
            }
        case 'B1_1':
            return {
                section: sectionB1,
                type:"B1_1",
                questions: questionsB1_1,
            }
        case 'B1_2':
            return {
                section: sectionB1,
                type:"B1_2",
                questions: questionsB1_2,
            }
        default: {
            return state
        }
    }
}

export default questionReducer