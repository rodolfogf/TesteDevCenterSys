import { Box, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navegacao = (props) => {
    return (
        <Box sx={{ p: 5 }}>
            <Stack
                spacing={1}
                alignItems="left"
                direction="row"
            >
                <Button
                    variant="contained"
                    startIcon={<HomeIcon />}
                    href='/'                   
                >                        
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    href={props.rotaVoltar}                   
                >                        
                </Button>
            </Stack>
        </Box>
    )
};

export default Navegacao;