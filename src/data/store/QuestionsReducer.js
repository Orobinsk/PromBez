import questionsA1 from "../questions/QuestionsA1";
import questionsB1_1 from "../questions/QuestionsB1_1";
import questionsB1_2 from "../questions/QuestionsB1_2";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mainSectionName: 'Общие требования по промышленной безопасности',
    mainSectionType: 'A1',
    sections: [
        {
            name: 'А.1. Основы промышленной безопасности',
            sectionType: 'A1',
        },
    ],
    questions: questionsA1,
};


const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setSection(state, action) {
            switch (action.payload) {
                case 'A1':
                    state.mainSectionName = 'Общие требования по промышленной безопасности'
                    state.mainSectionType = 'A1'
                    state.sections = [
                        {
                            name: 'А.1. Основы промышленной безопасности',
                            sectionType: 'A1',
                        },
                    ]
                    state.questions = questionsA1
                    break
                case 'B1':
                    state.mainSectionName = 'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'
                    state.mainSectionType = 'B1'
                    state.sections = [
                        {
                            name: 'Б.1.1. Эксплуатация химически опасных производственных объектов',
                            sectionType: 'B1_1',
                        },
                        {
                            name: 'Б.1.2. Эксплуатация ОПО нефтегазоперерабатывающих и нефтехимических производств',
                            sectionType: 'B1_2',
                        },
                    ]
                    state.questions = [...questionsB1_1, ...questionsB1_2]
                    break
                case 'B1_1':
                    state.mainSectionName = 'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'
                    state.mainSectionType = 'B1_1'
                    state.sections = [
                        {
                            name: 'Б.1.1. Эксплуатация химически опасных производственных объектов',
                            sectionType: 'B1_1',
                        },

                    ]
                    state.questions = questionsB1_1
                    break
                case 'B1_2':
                    state.mainSectionName = 'Б.1 Требования промышленной безопасности в химической, нефтехимической и нефтеперерабатывающей промышленности'
                    state.mainSectionType = 'B1_2'
                    state.sections = [
                        {
                            name: 'Б.1.2. Эксплуатация ОПО нефтегазоперерабатывающих и нефтехимических производств',
                            sectionType: 'B1_2',
                        },
                    ]
                    state.questions = questionsB1_2
                    break
                default: {
                    return state
                }
            }
        }
    }
})

export const {setSection} = sectionSlice.actions;
export default sectionSlice.reducer;