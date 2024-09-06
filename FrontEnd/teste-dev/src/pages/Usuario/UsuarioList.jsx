import React from "react";
import List from "../../components/list/List";
import './Usuario.css'

const UsuarioList = () => {    

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { field: 'email', headerName: 'Email', width: 300},
        { 
            field: 'dataNascimento', 
            headerName: 'Data de Nascimento', 
            width: 200,
            valueFormatter: (value) => {
                if (!value) return '';
                return value.split(' ')[0];
            }
        }
      ];
      
      const mock = [
        { id: 1, nome: "Leo", email: "leo@email.com", "dataNascimento": "01/01/2000 00:00:00" },
        { id: 2, nome: "Ju", email: "ju@email.com", "dataNascimento": "01/01/2000 00:00:00" }
      ];

    return (
            <List
                texto="Usuários cadastrados"
                rota="/usuario-criar"
                rotaVoltar="/"                
                adicionarBtDesabilitado={false}
                columns={columns}
                rows={mock}
            >
            </List>
        );
    };

export default UsuarioList;
