import { TextField } from '@mui/material';

const CustomTextField = (props) => {
  return (
    <TextField
      {...props}
      variant="filled"
      sx={{
        input: { backgroundColor: 'white', color: 'black' }, // fundo branco e texto preto
      }}
    />
  );
};

export default CustomTextField;