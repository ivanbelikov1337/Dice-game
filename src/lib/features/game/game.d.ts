export interface CounterState {
    message: string
    selectedCondition: 'greater' | 'lesser' | null
    history: History[]
    gameResult: number | null
    threshold: number | string
    attemptCounter: number
}

export  interface History {
    num: number
    flag: boolean
    attempt: number
}
