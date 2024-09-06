import { Box, Typography } from '@mui/material';

const Subtitulo = (props) => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ fontFamily: 'Segoe UI', fontWeight: 600 }}>
                {props.texto}
            </Typography>
        </Box>
    )
};

export default Subtitulo;