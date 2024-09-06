import React from "react";
import List from "../../components/list/List";
import './Vendedor.css'

const VendedorList = () => {    

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { 
            field: 'percentual', 
            headerName: 'Percentual comissões', 
            width: 200,
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return 'R$ 0,00';
                }                
                return `${value.toFixed(2).replace('.', ',')}%`;
            }
        },
        { 
            field: 'valorComissoes', 
            headerName: 'Soma comissões', 
            type: 'number', 
            width: 180, 
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
        { id: 1, nome: "Leo", percentual: 5, "valorComissoes": 1000.0 },
        { id: 2, nome: "Ju", percentual: 5, "valorComissoes": 2000.0 }
      ];

      return (
        <List
            texto="Vendedores cadastrados"
            rota="/vendedor-criar"
            rotaVoltar="/"        
            adicionarBtDesabilitado={false}
            columns={columns}
            rows={mock}
        >
        </List>
    );
};

export default VendedorList;
