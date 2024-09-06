import { Button, Stack } from "@mui/material";
import './Usuario.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const UsuarioCreate = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('nome' + nome); 
    }
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
                            label='Senha'
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <CustomTextField 
                            label='Digite a senha'
                            type='password'
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                        />
                        <CustomTextField 
                            label='Confirme a senha'
                            value={confirmaSenha}
                            setValue={setConfirmaSenha}
                        />                
                        <Button variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/usuario-lista'
                        />                    
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default UsuarioCreate;