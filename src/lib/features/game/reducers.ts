import {CounterState, History} from "@/lib/features/game/game";
import {PayloadAction} from "@reduxjs/toolkit";

export const gameReducers = {
    setThreshold: {
        reducer: (state: CounterState, action: PayloadAction<string | number>) => {
            if (+action.payload  < 1 || +action.payload > 100) {
                state.threshold = "error"
            } else state.threshold = action.payload

        },
        prepare: (payload: string | number) => ({payload})
    },
    setGameResult: {
        reducer: (state: CounterState, action: PayloadAction<number | null>) => {
            state.gameResult = action.payload
        },
        prepare: (payload: number) => ({payload})
    },
    setHistory: {
        reducer: (state: CounterState, action: PayloadAction<History>) => {
            if (state.history.length === 10) {
                state.history.shift()
                state.history.push(action.payload)
            } else {
                state.history.push(action.payload)
            }
        },
        prepare: (payload: History) => ({payload})
    },
    setMessage: {
        reducer: (state: CounterState, action: PayloadAction<boolean>) => {
            state.message = action.payload ? "Поздравляем, вы выиграли!" : "Увы, вы не выиграли."
        },
        prepare: (payload: boolean) => ({payload})
    },
    setSelectedCondition: {
        reducer: (state: CounterState, action: PayloadAction<"greater" | "lesser" | null>) => {
            state.selectedCondition = action.payload
        },
        prepare: (payload: 'greater' | 'lesser') => ({payload})
    },
    setIncrementedAttemptCounter: {
        reducer: (state: CounterState) => {
            state.attemptCounter+= 1
        },
        prepare: () => {
            return {payload: {}};
        }
    }
}
