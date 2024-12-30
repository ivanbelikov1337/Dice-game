"use client"
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

import {generateRandomNumber, isValidCondition, isValidResult} from "@/utils";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/hooks";
import {useState} from "react";

import { actions as gameActions } from "@/lib/features/game/index"

const GameControl = () => {
    const [selected, setSelected] = useState(false)
    const {threshold, selectedCondition,attemptCounter} =  useAppSelector((state) => state.game)
    const dispatch = useAppDispatch()

    const handlePlay = () => {
        if (!isValidCondition({selectedCondition, threshold, setSelected,dispatch})) {
            return;
        }
        const result = generateRandomNumber();
        const isValid = isValidResult({selectedCondition, result, threshold});

        dispatch(gameActions.setIncrementedAttemptCounter())
        dispatch(gameActions.setGameResult(result));
        dispatch(gameActions.setMessage(isValid))
        dispatch(gameActions.setHistory({
            num: result,
            flag:isValid,
            attempt: attemptCounter
        }))
    };

    const handleSelectedRadioGroup = (e:string) => {
        dispatch(gameActions.setSelectedCondition(e as 'greater' | 'lesser'))
        setSelected(false)
    }

    return (
        <Box sx={{display: "grid", justifyContent: "center"}}>
            <FormControl component="fieldset" sx={{marginBottom: 2, width: "20rem"}}>
                <RadioGroup onChange={(e) =>handleSelectedRadioGroup(e.target.value)}
                            sx={{display: "flex", justifyContent: "space-around"}}
                            value={selectedCondition}
                            row>
                    <FormControlLabel value="greater" control={<Radio/>} label="Больше"/>
                    <FormControlLabel value="lesser" control={<Radio/>} label="Меньше"/>
                    {selected && (
                        <Typography sx={{color: "red", paddingTop: "1rem"}}>
                            Выберите Больше или Меньше
                        </Typography>
                    )}
                </RadioGroup>
            </FormControl>
            <Button variant="contained" onClick={handlePlay} sx={{marginBottom: 2, backgroundColor: "black" }}>
                Играть
            </Button>
        </Box>
    );
};

export default GameControl;