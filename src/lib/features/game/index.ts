import {createSlice} from '@reduxjs/toolkit'


export interface CounterState {
    message: string
    selectedCondition: 'greater' | 'lesser' | null
    history: number[]
    gameResult: number | null
    threshold: number | string
}

const initialState: CounterState = {
    message: "",
    threshold: "",
    history: [],
    gameResult: null,
    selectedCondition: null
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setThreshold: (state, {payload}) => {
            state.threshold = payload
        },
        setGameResult: (state, {payload}) => {
            state.gameResult = payload
        },
        setHistory: (state, {payload}) => {
            if (payload.delete) {
                state.history.shift()
                state.history.push(payload.result)
            } else {
                state.history.push(payload)
            }
        },
        setMessage: (state, {payload}) => {
            state.message = payload ? "Поздравляем, вы выиграли!" : "Увы, вы не выиграли."
        },
        setSelectedCondition: (state, {payload}) => {
            state.selectedCondition = payload
        },

    },
})

// Action creators are generated for each case reducer function
export const {setThreshold, setGameResult, setHistory, setMessage, setSelectedCondition} = gameSlice.actions

export default gameSlice.reducer
