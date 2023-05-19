import {combineReducers, configureStore} from "@reduxjs/toolkit"
import sectionReducer from './QuestionsReducer'

const rootReducer = combineReducers({
    sectionReducer
})

export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}
