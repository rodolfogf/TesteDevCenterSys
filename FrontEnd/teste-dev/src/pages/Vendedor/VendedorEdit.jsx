import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Vendedor.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import { useParams } from 'react-router-dom';
import useSnackbarWithApiPut from "../../hooks/useSnackbarComApiPut";
import { NumericFormat } from "react-number-format";

const VendedorEdit = () => {

    const { id } = useParams();
    const [vendedor, setVendedor] = useState({})
    const [nome, setNome] = useState('');
    const [percentualComissao, setPercentualComissao] = useState('');    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/vendedor', id);
                console.log('response:', response);

                if (response) {
                    setVendedor(response);
                    setNome(response.nome);
                    setPercentualComissao(response.percentualComissao.toString().replace('.', ','));
                }
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const vendedorAtualizado = {
            nome: nome, 
            percentualComissao: parseFloat(percentualComissao.replace(",", "."))
        }

        setVendedor(vendedorAtualizado);
        
    }, [nome, percentualComissao]);

    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPut("Dados do vendedor atualizados com sucesso!", "Erro ao atualizar os dados do vendedor");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/vendedor', id,  vendedor);
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
                            label="Percentual comissões" value={percentualComissao}
                            onValueChange={(values) => setPercentualComissao(values.value)}
                        />
                        <Button type="submit" variant="contained">Confirmar alterações</Button>
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

export default VendedorEdit;