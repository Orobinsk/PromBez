import {createStore} from "redux";
import questionsReducer from "./QuestionsReducer"

export const store = createStore(questionsReducer)
