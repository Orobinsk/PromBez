import questionsA1 from "../questions/QuestionsA1";
import questionsB1_1 from "../questions/QuestionsB1_1";
import questionsB1_2 from "../questions/QuestionsB1_2";
import {createSlice} from "@reduxjs/toolkit";
import questionsB2_1 from "../questions/QuestionsB2_1";
import questionsB3_1 from "../questions/QuestionsB3_1";

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
                case 'B2':
                    state.mainSectionName = 'Б.2. Требования промышленной безопасности в нефтяной и газовой промышленности'
                    state.mainSectionType = 'B2'
                    state.sections = [
                        {
                            name: 'Б.2.1. Эксплуатация объектов нефтяной и газовой промышленности',
                            sectionType: 'B2_1',
                        },
                    ]
                    state.questions = questionsB2_1
                    break
                case 'B2_1':
                    state.mainSectionName = 'Б.2. Требования промышленной безопасности в нефтяной и газовой промышленности'
                    state.mainSectionType = 'B2_1'
                    state.sections = [
                        {
                            name: 'Б.2.1. Эксплуатация объектов нефтяной и газовой промышленности',
                            sectionType: 'B2_1',
                        },
                    ]
                    state.questions = questionsB2_1
                    break
                case 'B3':
                    state.mainSectionName = 'Б.3. Требования промышленной безопасности в металлургической промышленности'
                    state.mainSectionType = 'B3'
                    state.sections = [
                        {
                            name: 'Б.3.1. Литейное производство черных и цветных металлов',
                            sectionType: 'B3_1',
                        },
                    ]
                    state.questions = questionsB3_1
                    break
                case 'B3_1':
                    state.mainSectionName = 'Б.3. Требования промышленной безопасности в металлургической промышленности'
                    state.mainSectionType = 'B3_1'
                    state.sections = [
                        {
                            name: 'Б.3.1. Литейное производство черных и цветных металлов',
                            sectionType: 'B3_1',
                        },
                    ]
                    state.questions = questionsB3_1
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