"use client"
import {Box, Typography} from "@mui/material";
import {Cancel, CheckCircle} from "@mui/icons-material";

import {useAppSelector} from "@/lib/hooks/hooks";

const GameResult = () => {
    const message = useAppSelector(state => state.game.message)
    const gameResult = useAppSelector(state => state.game.gameResult)
    return (
        <Box sx={{display: "grid", gap: "1rem", justifyContent: "center", paddingTop:"1rem", textAlign:"center"}}>
            {gameResult !== null && (
                <Typography variant="h6" sx={{marginBottom: 2}}>
                    Результат броска: {gameResult}
                </Typography>
            )}

            {message && (
                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                    {message === 'Поздравляем, вы выиграли!'
                        ? (<CheckCircle color="success" sx={{marginRight: 1}}/>)
                        : (<Cancel color="error" sx={{marginRight: 1}}/>)
                    }
                    <Typography variant="body1">{message}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default GameResult;