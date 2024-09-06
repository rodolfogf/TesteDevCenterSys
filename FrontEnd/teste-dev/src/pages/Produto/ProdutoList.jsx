import React from "react";
import List from "../../components/list/List";
import './Produto.css'
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";

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
      
      const mock = [
        { id: 1, nome: "Eisenbahn Pilsen", descricao: "Cerveja Lata 355 ml", preco: 1.0 },
        { id: 2, nome: "Arroz Codil", descricao: "Arroz Tipo 1 5Kg", preco: 19.0 }
      ];

    return (
        <List
            texto="Produtos cadastrados"
            rota="/produto-criar"
            rotaVoltar = "/"
            adicionarBtDesabilitado={false}
            columns={columns}
            rows={mock}
        >
        <Button startIcon={<HomeIcon />}/>
        </List>
        
    );
};

export default ProdutoList;
