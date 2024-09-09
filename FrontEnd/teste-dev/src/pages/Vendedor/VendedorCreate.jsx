import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Vendedor.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import useSnackbarWithApiPost from "../../hooks/useSnackbarComApiPost";
import { NumericFormat } from "react-number-format";

const VendedorCreate = () => {
    const [nome, setNome] = useState('');
    const [percentualComissao, setPercentualComissao] = useState('');

    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPost("Vendedor cadastrado com sucesso!", "Erro ao cadastrar vendedor");

    const novoVendedor = {
        "nome": nome,
        "percentualComissao": parseFloat(percentualComissao.replace(",", "."))
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/vendedor', novoVendedor);
        setNome('');
        setPercentualComissao('');        
    };

    return (
        <div className='container-vendedor'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastre um vendedor"
                />
                <Subtitulo
                    texto=""
                />
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomTextField
                            label='Nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <NumericFormat
                            customInput={CustomTextField}
                            thousandSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                            suffix=" %"
                            decimalSeparator=","
                            label="Percentual comissões"
                            value={percentualComissao}
                            onValueChange={(values) => setPercentualComissao(values.value)}
                        />                   
                        <Button type="submit" variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/vendedor-lista'
                        />                   
                    </Stack>
                </form>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>                           
            </section>
        </div>
    )
};

export default VendedorCreate;