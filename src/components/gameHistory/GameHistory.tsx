"use client"
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";

import {useAppSelector} from "@/lib/hooks/hooks";

const GameHistory = () => {
    const history = useAppSelector((state) => state.game.history)
    return (
        <Box sx={{display: "grid", justifyContent:"center",textAlign:"center", paddingTop: "1rem"}}>
            <Typography variant="h6" gutterBottom>
                История игр:
            </Typography>
            <List sx={{display: "grid", gridTemplateColumns: "1fr 1fr"}} >
                {history.map(({flag, attempt, num}) => (
                    <ListItem sx={{color: `${flag ? "green" : "red"}`}} key={attempt}>
                        <ListItemText primary={`Бросок #${attempt}: ${num}`}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GameHistory;