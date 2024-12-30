import type {AppDispatch} from "@/lib/store";

export interface IsValidCondition {
    selectedCondition: string | null,
    threshold: string | number
    setSelected:  Dispatch<SetStateAction>
    dispatch: AppDispatch
}
export interface IsValidResult {
    selectedCondition: string | null,
    threshold: string | number
    result: number
}