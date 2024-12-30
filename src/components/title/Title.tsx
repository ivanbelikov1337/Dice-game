import {Typography, Box } from "@mui/material";

const Title = () => {
    return (
        <Box>
            <Typography  variant="h4" sx={{textAlign: "center", paddingBottom: "1rem"}} gutterBottom>
                Игра в кубик
            </Typography>
        </Box>
    );
};

export default Title;