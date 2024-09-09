import { Alert, Button, Snackbar, Stack } from "@mui/material";
import './Login.css'
import React, { useEffect } from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Titulo from "../../components/custom/Titulo";
import Subtitulo from "../../components/custom/Subtitulo";
import homeImage from '../../img/home.png'
import useSnackbarWithApiPost from "../../hooks/useSnackbarComApiPost";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { openSnackbar, snackbarMessage, snackbarSeverity, snackBarResponse, handleApiCall, handleCloseSnackbar } =
        useSnackbarWithApiPost("Login realizado com sucesso!", "Erro ao realizar login. Tente novamnete");
    
    useEffect(() => {
        const novologin = {
            email : email, 
            password : senha
        }

        setLogin(novologin);
    }, [email, senha]);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleApiCall('/usuario/login', login);
        console.log("snackBarResponse", snackBarResponse);
        if (snackBarResponse.status === 200){
            const token = snackBarResponse.data;
            localStorage.setItem('token', token)
            navigate('/')
        }
        setSenha('');        
    };
    
    
    return (
        <div className='container-login'>
            <img src={homeImage} alt='centersys'/>
            <section>
                <form onSubmit={handleSubmit}>
                <Titulo
                    texto="Bem vindo!"
                />
                <Subtitulo
                    texto="Faça seu login"
                />
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomTextField 
                            label='Digite o email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CustomTextField 
                            label='Senha'
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />               
                    <Button type="submit" variant="contained">Login</Button>
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

export default Login;