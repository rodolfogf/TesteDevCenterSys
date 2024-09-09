import { Alert, Button, Snackbar, Stack  } from "@mui/material";
import './Usuario.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";
import useSnackbarWithApiPost from "../../hooks/useSnackbarComApiPost";

const UsuarioCreate = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    
    const { openSnackbar, snackbarMessage, snackbarSeverity, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPost("Usuário cadastrado com sucesso!", "Erro ao cadastrar o usuário");

    const novoUsuario = {
        "nome": nome,
        "email": email,
        "cpf": cpf,
        "dataNascimento": dataNascimento,
        "password": senha,
        "repassword": confirmaSenha
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/usuario/cadastro', novoUsuario);
        setNome('');
        setEmail('');
        setCpf('');
        setDataNascimento('');
        setSenha('');
        setConfirmaSenha('');        
    };
    
    return (
        <div className='container-usuario'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastre um usuário"
                ></Subtitulo>
                <Subtitulo
                    texto=""
                ></Subtitulo>
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
                        <Button  type="submit" variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/usuario-lista'
                        />                    
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

export default UsuarioCreate;