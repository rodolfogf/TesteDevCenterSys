import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Venda.css'
import ApiService from "../../services/ApiService";

const VendaList = () => {

    const columns = [
        { field: 'dataVenda', headerName: 'Data da Venda', width: 150 },
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
        { field: 'nomeVendedor', headerName: 'Vendedor', width: 180 },
        {
            field: 'comissaoVendedor',
            headerName: 'Comissão do Vendedor',
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

    const [comissoes, setComissoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/comissao');
                console.log('response:', response);

                if (!!response) setComissoes(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    return (
        <List
            texto="Comissões"
            adicionarBtDesabilitado={true}
            editarDesabilitado={true}
            deletarDesabilitado={true}
            columns={columns}
            rows={comissoes}
            rotaVoltar="/"
        >
        </List>
    );
};

export default VendaList;
