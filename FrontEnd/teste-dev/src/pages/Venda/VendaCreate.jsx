import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import './Venda.css'
import React, { useEffect } from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import CustomAutoComplete from "../../components/custom/CustomAutoComplete";
import ApiService from "../../services/ApiService";
import { NumericFormat } from 'react-number-format';
import List from "../../components/list/List";
import Navegacao from "../../components/custom/Navegacao";
import useSnackbarWithApi from "../../hooks/useSnackbarComApiPost";

const VendaCreate = () => {

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { field: 'descricao', headerName: 'Descrição', width: 250},
        {
            field: 'preco',
            headerName: 'Preço unidade',
            type: 'number',
            width: 110, 
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return 'R$ 0,00';
                }                
                return `R$ ${value.toFixed(2).replace('.', ',')}`;
            }
        },
        { 
            field: 'quantidade', 
            headerName: 'Quantidade',
            type: 'number', 
            width: 100},
        {
            field: 'total',
            headerName: 'Total',
            type: 'number',
            width: 100, 
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return 'R$ 0,00';
                }                
                return `R$ ${value.toFixed(2).replace('.', ',')}`;
            }
        }        
    ]

    const [vendedor, setVendedor] = useState(null);
    const [vendedorId, setVendedorId] = useState('');
    const [produto, setProduto] = useState(null);
    const [quantidade, setQuantidade] = useState('');
    const [totalItem, setTotalItem] = useState(0);
    const [vendaProdutos, setVendaProdutos] = useState([]);
    const [vendaProdutosSubmit, setVendaProdutosSubmit] = useState([]);
    const [vendaSubmit, setVendaSubmit] = useState([]);

    const [id, setId] = useState(1);

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
                
                if (!!response) setDataProduto(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };
        
        fetchData();
        
    }, []);

    useEffect(() => {
        const calcularTotal = () => {
            if (produto && quantidade) {
                const totalCalculado = produto.preco * parseFloat(quantidade);
                setTotalItem(totalCalculado);
            }
        };
    
        calcularTotal();
    }, [produto, quantidade]);

    useEffect(() => {
        if(vendedor) setVendedorId(vendedor.id);        

    }, [vendedor]);

    useEffect(() => {
        let novoVendaProdutosSubmit = vendaProdutos.map(item => ({
            produtoId: item.produtoId,
            quantidade: item.quantidade
        }))

        setVendaProdutosSubmit(novoVendaProdutosSubmit);

    }, [vendaProdutos])

    useEffect(() => {

        let dataVenda = new Date();
        let dataVendaFormatada = dataVenda.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false  // para formato de 24 horas
          });
        let novaVenda = {
            "dataVenda": dataVendaFormatada,
            "vendedorId": vendedorId,
            "vendaProdutos": vendaProdutosSubmit
        };

        setVendaSubmit(novaVenda);

    }, [vendaProdutosSubmit, vendedorId])


    
    const handleAddItem = () => {
        if (produto && quantidade > 0) {
            var novoId = id + 1;
            setId(novoId);

            let nomeProduto = produto.nome;
            let idProduto = produto.id;
            let descricaoProduto = produto.descricao;
            let precoProduto = produto.preco;
            let quantidadeItem = quantidade;
            let totalItemProduto = totalItem
            
            let novoItemVenda = {
                id: id,
                produtoId: idProduto,
                nome: nomeProduto,
                descricao: descricaoProduto,
                preco: precoProduto,
                quantidade: quantidadeItem,
                total: totalItemProduto
            };
            setVendaProdutos([...vendaProdutos, novoItemVenda]);
            setProduto(null);
            setQuantidade('');
            setTotalItem(0);
        } else {
            alert('Selecione um produto e insira a quantidade!');
        }
    };

    
    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } = 
    useSnackbarWithApi("Venda finalizada com sucesso!", "Erro ao finalizar a venda");
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/venda', vendaSubmit);        
    };
    
    const handleDeleteItem = (id) => {
        const novoVendaProdutos = vendaProdutos.filter((item) => item.id !== id);
        setVendaProdutos(novoVendaProdutos);
    };
    
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
                        <NumericFormat
                            disabled
                            customInput={CustomTextField}
                            thousandSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                            prefix="R$ "
                            decimalSeparator=","
                            label="Valor Total"
                            value={totalItem}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleAddItem}>Adicionar Item</Button>
                    </Stack>
                </form>
            </section>
            <section>
            <List
                texto="Itens da Venda"
                adicionarBtDesabilitado={true}
                editarDesabilitado={true}
                deletarDesabilitado={false}
                ocultarNavegacao={true}
                columns={columns}
                rows={vendaProdutos}
                onDelete={handleDeleteItem}
            >
            </List>
            <Box sx={{ p: 6 }}>
                <Stack
                    spacing={1}
                    alignItems="center"
                    direction="column"
                >
                    <Button 
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Finalizar Venda
                    </Button>
                    <Navegacao
                        rotaVoltar="/"
                    /> 
                </Stack>
            </Box>
            {<Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>}
            </section>
        </div>
    )
};

export default VendaCreate;