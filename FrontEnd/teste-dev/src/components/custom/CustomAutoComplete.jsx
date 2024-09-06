import { Autocomplete } from '@mui/material';

const CustomAutoComplete = (props) => {
  return (
    <Autocomplete
      {...props}
      sx={{
        input: { backgroundColor: 'white', color: 'black' }, // Fundo branco e texto preto
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // Cor padrão da borda
          },
          '&:hover fieldset': {
            borderColor: 'blue', // Cor da borda ao passar o mouse
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green', // Cor da borda quando o campo está focado
          }, // fundo branco e texto preto
          '& .MuiAutocomplete-popupIndicator': {
            color: 'white', // Cor do ícone do botão (padrão: seta para baixo)
          },
          '& .MuiAutocomplete-popupIndicatorOpen': {
            color: 'green', // Cor do ícone quando o menu está aberto
          },          
        }, // fundo branco e texto preto
      }}
    />
  );
};

export default CustomAutoComplete;