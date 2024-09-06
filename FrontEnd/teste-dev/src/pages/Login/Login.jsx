import { Button, Stack, Typography } from "@mui/material";
import './Login.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Titulo from "../../components/custom/Titulo";
import Subtitulo from "../../components/custom/Subtitulo";
import homeImage from '../../img/home.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();

    }
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
                    <Button variant="contained">Login</Button>
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default Login;