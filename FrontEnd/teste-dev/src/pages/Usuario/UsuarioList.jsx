import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import './Usuario.css'
import ApiService from "../../services/ApiService";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

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
      
    const [usuarios, setUsuarios] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get('/usuario');
                console.log('response:', response);
                
                if (!!response) setUsuarios(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();

    }, []);

    const navigate = useNavigate();

    const handleEditItem = (id) => {
        navigate(`/usuario-editar/${id}`);
    };

    const handleDeleteItem = async (id) => {
        try {            
            const response = await ApiService.delete('/usuario', id);
            console.log("response", response);
    
            const novosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
            setUsuarios(novosUsuarios);
    
        } catch (error) {
            console.error("Erro ao excluir o usuário", error);
        }
    };

    return (
        <List
            texto="Usuários cadastrados"
            rota="/usuario-criar"
            rotaVoltar="/"                
            adicionarBtDesabilitado={false}
            editarDesabilitado={false}
            deletarDesabilitado={false}
            columns={columns}
            rows={usuarios}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
        >
        <Button startIcon={<HomeIcon />}/>    
        </List>
    );
};

export default UsuarioList;
