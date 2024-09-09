import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Usuario.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import useSnackbarWithApiPut from "../../hooks/useSnackbarComApiPut";
import { useParams } from 'react-router-dom';

const UsuarioEdit = () => {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');    

    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/usuario', id);
                console.log('response:', response);

                if (response) {
                    setNome(response.nome);
                    setEmail(response.email);
                    setCpf(response.cpf);
                    setDataNascimento(response.dataNascimento);
                }
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const usuarioAtualizado = {
            nome: nome, 
            email: email, 
            cpf: cpf, 
            dataNascimento: dataNascimento, 
            password: senha,
            repassword: confirmaSenha
        }

        setUsuario(usuarioAtualizado);
        
    }, [nome, email, cpf, dataNascimento, senha, confirmaSenha]);

    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPut("Dados do usuário atualizados com sucesso!", "Erro ao atualizar os dados do usuário");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/usuario', id,  usuario);
    };

      return (
        <div className='container-usuario'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastre um usuário"
                />
                <Subtitulo
                    texto=""
                />
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomTextField 
                             label='Nome'
                             value={nome}
                             onChange={(e) => setNome(e.target.value)}
                        />
                        <CustomTextField 
                            label='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CustomTextField 
                            label='Data de Nascimento'
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />                
                        <CustomTextField 
                            label='CPF'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <CustomTextField 
                            label='Digite a senha'
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <CustomTextField 
                            label='Confirme a senha'
                            type='password'
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                        />
                        <Stack
                            spacing={4}
                            alignItems="center"
                            direction="row"
                        >
                            <Button type="submit" variant="contained">Confirmar alterações</Button>
                            <Navegacao
                                rotaVoltar='/usuario-lista'
                            />
                        </Stack>                   
                    </Stack>
                </form>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>                           
            </section>
        </div>
    )
};

export default UsuarioEdit;