import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Produto.css'
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import ApiService from "../../services/ApiService";
import { useNavigate } from 'react-router-dom';

const ProdutoList = () => {    

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { field: 'descricao', headerName: 'Descrição', width: 300},
        {
            field: 'preco',
            headerName: 'Preço',
            type: 'number',
            width: 100, 
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return 'R$ 0,00';
                }                
                return `R$ ${value.toFixed(2).replace('.', ',')}`;
            }
        },        
    ]
      
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/produto');
                console.log('response:', response);
                
                if (!!response) setProdutos(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();        
        
    }, []);

    const navigate = useNavigate();

    const handleEditItem = (id) => {
        navigate(`/produto-editar/${id}`);
    };

    const handleDeleteItem = async (id) => {
        try {
            
            const response = await ApiService.delete('/produto', id);
            console.log("response", response);
    
            const novosProdutos = produtos.filter((produto) => produto.id !== id);
            setProdutos(novosProdutos);
    
        } catch (error) {
            console.error("Erro ao deletar o produto", error);
        }
    };

    return (
        <List
            texto="Produtos cadastrados"
            rota="/produto-criar"
            rotaVoltar = "/"
            adicionarBtDesabilitado={false}
            editarDesabilitado={false}
            deletarDesabilitado={false}
            columns={columns}
            rows={produtos}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
        >
        <Button startIcon={<HomeIcon />}/>
        </List>
        
    );
};

export default ProdutoList;
