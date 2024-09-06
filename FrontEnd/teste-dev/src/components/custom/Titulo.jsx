import { Box, Typography } from '@mui/material';

const Titulo = (props) => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" sx={{ fontFamily: 'Segoe UI', fontWeight: 600 }}>
                {props.texto}
            </Typography>
        </Box>
    )
};

export default Titulo;