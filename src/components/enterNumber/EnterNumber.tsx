"use client"
import {TextField} from "@mui/material";

import {useAppDispatch, useAppSelector} from "@/lib/hooks/hooks";
import { actions as gameActions } from "@/lib/features/game/index"
import {useMemo} from "react";


const EnterNumber = () => {
    const dispatch = useAppDispatch()
    const threshold = useAppSelector((state) => state.game.threshold)

    const hasError = useMemo(() => threshold === "error", [threshold]);
    const getHelperText = useMemo(
        () => (threshold === "error" && "Введите число от 1-100"),
        [threshold]
    );

    return (
        <TextField
            type="number"
            error={hasError}
            value={threshold}
            label="Введите 1-100"
            helperText={getHelperText}
            onChange={(e) => dispatch(gameActions.setThreshold(e.target.value))}
            sx={{ marginBottom: 2, display: "grid", placeSelf: "center", width: "20rem"}}
        />
    );
};

export default EnterNumber;