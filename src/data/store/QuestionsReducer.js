import questionsA1 from "../questions/QuestionsA1";
import questionsB1_1 from "../questions/QuestionsB1_1";
import SectionA1 from "../sectionsName/SectionA1";
import questionsB1_2 from "../questions/QuestionsB1_2";
import SectionB1 from "../sectionsName/SectionB1";

const AllQuestions = [...questionsA1, ...questionsB1_1]
const defaultState = {
    questions: AllQuestions,
    MainSection: "",
}

const questionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'A1':
            return {
                questions: questionsA1,
                mainSection: 'А.1. Основы промышленной безопасности',
                sectionNames: SectionA1,
                sectionType:'A1'
            }
        case 'B1':
            return {
                questions: [...questionsB1_1, ...questionsB1_2],
                mainSection: "Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности",
                sectionNames: SectionB1,
                sectionType:'B1'
            }
        default: {
            return state
        }
    }
}

export default questionReducer