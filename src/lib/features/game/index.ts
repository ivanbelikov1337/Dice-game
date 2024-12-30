import {createSlice} from '@reduxjs/toolkit'

import {CounterState} from "@/lib/features/game/game";
import {gameReducers}  from "./reducers"


const initialState: CounterState = {
    message: "",
    threshold: "",
    history: [],
    gameResult: null,
    attemptCounter: 1,
    selectedCondition: null
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: gameReducers
})
const actions = gameSlice.actions

export {gameReducers, actions };


export default gameSlice.reducer
