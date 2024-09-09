import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Produto.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import { NumericFormat } from 'react-number-format';
import useSnackbarWithApi from "../../hooks/useSnackbarComApi";

const ProdutoCreate = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApi("Produto cadastrado com sucesso!", "Erro ao cadastrar o produto");

    const novoProduto = {
        "nome": nome,
        "descricao": descricao,
        "preco": parseFloat(preco.replace(",", "."))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/produto', novoProduto);
        setNome('');
        setDescricao('');
        setPreco('');
    };

    return (
        <div className='container-produto'>
            <section>
                <form onSubmit={handleSubmit}>
                    <Subtitulo
                        texto="Cadastre um produto"
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
                        <CustomTextField
                            label='Descrição'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                        <NumericFormat
                            customInput={CustomTextField}
                            thousandSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                            prefix="R$ "
                            decimalSeparator=","
                            label="Preço"value={preco}
                            onValueChange={(values) => setPreco(values.value)}
                        />
                        <Button type="submit" variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/produto-lista'
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

export default ProdutoCreate;