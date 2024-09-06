import React from "react";
import List from "../../components/list/List";
import './Venda.css'

const VendaList = () => {    

    const columns = [
        { field: 'dataVenda', headerName: 'Data da Venda', width: 200 },
        {
            field: 'totalVenda',
            headerName: 'Valor Total',
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
        { field: 'nomeVendedor', headerName: 'Vendedor', width: 150},
        {
            field: 'comissaoVendedor',
            headerName: 'Comissao do Vendedor',
            type: 'number',
            width: 200, 
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return 'R$ 0,00';
                }                
                return `R$ ${value.toFixed(2).replace('.', ',')}`;
            }
        }
      ];
      
      const mock = [
        {id:1, "dataVenda": "03/09/2024", "totalVenda": 39.0, "nomeVendedor": "Leo", "comissaoVendedor": 1.95},
        {id:2 , "dataVenda": "03/09/2024", "totalVenda": 21.0, "nomeVendedor": "Ju", "comissaoVendedor": 1.05}
      ];

      return (
        <List
            texto="Comissões"
            adicionarBtDesabilitado={true}
            columns={columns}
            rows={mock}
            rotaVoltar="/"        
        >
        </List>
    );
};

export default VendaList;
