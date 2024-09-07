import { Button, Stack, TextField } from "@mui/material";
import './Venda.css'
import React, { useEffect } from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import CustomAutoComplete from "../../components/custom/CustomAutoComplete";
import Navegacao from "../../components/custom/Navegacao";
import ApiService from "../../services/ApiService";

const VendaCreate = () => {

    const mockVendedores = [
        { nome: "Leo", percentual: 5, valorComissoes: 1000.0 },
        { nome: "Ju", percentual: 5, valorComissoes: 2000.0 }
    ];

    const mockProdutos = [
        { nome: "Eisenbahn Pilsen", descricao: "Cerveja Lata 355 ml", preco: 1.0 },
        { nome: "Arroz Codil", descricao: "Arroz Tipo 1 5Kg", preco: 19.0 }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [vendedor, setVendedor] = useState(null);
    const [produto, setProduto] = useState(null);
    const [quantidade, setQuantidade] = useState('');

    const [dataVendedor, setDataVendedor] = useState([]);
    const [dataProduto, setDataProduto] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/vendedor');
                console.log('response:', response);

                if (!!response) setDataVendedor(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/produto');
                console.log('response:', response);

                if (!!response) setDataProduto(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className='container-venda'>
            <section>
                <form onSubmit={handleSubmit}>
                    <Subtitulo
                        texto="Registrar uma venda"
                    ></Subtitulo>
                    <Subtitulo
                        texto=""
                    ></Subtitulo>
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomAutoComplete
                            label='Vendedor'
                            value={vendedor}
                            onChange={(event, newValue) => setVendedor(newValue)}
                            options={dataVendedor}
                            getOptionLabel={(option) => option.nome}
                            renderInput={(params) => <TextField {...params} label="Selecione o Vendedor" />}
                            isOptionEqualToValue={(option, value) => option.nome === value?.nome}
                        />
                        <CustomAutoComplete
                            label='Produto'
                            value={produto}
                            onChange={(event, newValue) => setProduto(newValue)}
                            options={dataProduto}
                            getOptionLabel={(option) => option.nome}
                            renderInput={(params) => <TextField {...params} label="Selecione o Produto" />}
                            isOptionEqualToValue={(option, value) => option.nome === value?.nome}
                        />
                        <CustomTextField
                            label='Quantidade'
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <Button variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/'
                        />
                    </Stack>
                </form>
            </section>
        </div>
    )
};

export default VendaCreate;