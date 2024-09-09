import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Vendedor.css'
import ApiService from "../../services/ApiService";

const VendedorList = () => {

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 220 },
        {
            field: 'percentualComissao',
            headerName: 'Percentual comissões',
            type: 'number',
            width: 170,
            valueFormatter: (value) => {
                const valor = Number(value);
                if (isNaN(valor)) {
                    return '0 %';
                }
                return `${value.toFixed(2).replace('.', ',')}%`;
            }
        },
        {
            field: 'valorComissoes',
            headerName: 'Soma comissões',
            type: 'number',
            width: 140,
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
        { id: 1, nome: "Leo", percentualComissao: 5.0, "valorComissoes": 1000.0 },
        { id: 2, nome: "Ju", percentualComissao: 5.0, "valorComissoes": 2000.0 }
    ];

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/vendedor');
                console.log('response:', response);

                if (!!response) setData(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    return (
        <List
            texto="Vendedores cadastrados"
            rota="/vendedor-criar"
            rotaVoltar="/"
            adicionarBtDesabilitado={false}
            editarDesabilitado={false}
            deletarDesabilitado={false}
            columns={columns}
            rows={data}
        >
        </List>
    );
};

export default VendedorList;
