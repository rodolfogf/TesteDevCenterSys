import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Usuario.css'
import ApiService from "../../services/ApiService";

const UsuarioList = () => {    

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { field: 'email', headerName: 'Email', width: 200},
        { 
            field: 'dataNascimento', 
            headerName: 'Data de Nascimento', 
            width: 180,
            valueFormatter: (value) => {
                if (!value) return '';
                return value.split(' ')[0];
            }
        }
    ];
      
    const mock = [
        { id: 1, nome: "Leo", email: "leo@email.com", dataNascimento: "01/01/2000 00:00:00" },
        { id: 2, nome: "Ju", email: "ju@email.com", dataNascimento: "01/01/2000 00:00:00" }
    ];

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/usuario');
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
            texto="Usuários cadastrados"
            rota="/usuario-criar"
            rotaVoltar="/"                
            adicionarBtDesabilitado={false}
            columns={columns}
            rows={data}
        >
        </List>
    );
};

export default UsuarioList;
