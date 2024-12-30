"use client"
import {useState} from 'react';

import {TextField} from "@mui/material";

import {useAppDispatch} from "@/lib/hooks/hooks";
import {setThreshold} from "@/lib/features/game/gameSlice";

const EnterNumber = () => {
    const dispatch = useAppDispatch()
    const [thresholdNum, setThresholdNum] = useState<number | string>("")

    const handleThresholdChange = (e: string) => {
        setThresholdNum(e)
        dispatch(setThreshold(e))
    };

    return (
        <TextField
            label="Введите порог (1-100)"
            type="number"
            value={thresholdNum}
            onChange={(e) => handleThresholdChange(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
        />
    );
};

export default EnterNumber;