import React, { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Produto.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import { NumericFormat } from 'react-number-format';
import { useParams } from 'react-router-dom';
import useSnackbarWithApiPut from "../../hooks/useSnackbarComApiPut";

const ProdutoEdit = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState({})
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/produto', id);
                console.log('response:', response);

                if (response) {
                    setProduto(response);
                    setNome(response.nome);
                    setDescricao(response.descricao);
                    setPreco(response.preco.toString().replace('.', ','));
                }
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const produtoAtualizado = {
            nome: nome, 
            descricao: descricao, 
            preco: parseFloat(preco.replace(",", "."))
        }

        setProduto(produtoAtualizado);
        
    }, [nome, descricao, preco]);

    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPut("Dados do produto atualizados com sucesso!", "Erro ao atualizar os dados do produto");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/produto', id,  produto);
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
                            label="Preço" value={preco}
                            onValueChange={(values) => setPreco(values.value)}
                        />
                        <Button type="submit" variant="contained">Confirmar alterações</Button>
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

export default ProdutoEdit;