import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Vendedor.css'
import ApiService from "../../services/ApiService";
import { useNavigate } from 'react-router-dom';

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

    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/vendedor');
                console.log('response:', response);

                if (!!response) setVendedores(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    const navigate = useNavigate();

    const handleEditItem = (id) => {
        navigate(`/vendedor-editar/${id}`);
    };

    const handleDeleteItem = async (id) => {
        try {
            
            const response = await ApiService.delete('/vendedor', id);
            console.log("response", response);
    
            const novosVendedores = vendedores.filter((vendedor) => vendedor.id !== id);
            setVendedores(novosVendedores);
    
        } catch (error) {
            console.error("Erro ao excluir o vendedor", error);
        }
    };

    return (
        <List
            texto="Vendedores cadastrados"
            rota="/vendedor-criar"
            rotaVoltar="/"
            adicionarBtDesabilitado={false}
            editarDesabilitado={false}
            deletarDesabilitado={false}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            columns={columns}
            rows={vendedores}
        >
        </List>
    );
};

export default VendedorList;
