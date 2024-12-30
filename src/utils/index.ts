import { actions as gameActions } from "@/lib/features/game/index"
import {IsValidCondition, IsValidResult} from "@/utils/type";


export const generateRandomNumber = (): number => Math.floor(Math.random() * 100) + 1;

export const isValidCondition = ({selectedCondition, threshold, setSelected,dispatch}: IsValidCondition):boolean => {
    if (!selectedCondition && !threshold) {
        setSelected(true);
        dispatch(gameActions.setThreshold("error"));
        return false;
    }
    if (!selectedCondition) {
        setSelected(true);
        return false;
    }
    if (!threshold || threshold === "error") {
        dispatch(gameActions.setThreshold("error"));
        return false;
    }
    return true;
};

export const isValidResult = ({selectedCondition, result, threshold}:IsValidResult) => {
    return (selectedCondition === 'greater' && result > Number(threshold)) ||
        (selectedCondition === 'lesser' && result < Number(threshold));
};