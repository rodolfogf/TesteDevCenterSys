import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Button, Stack } from "@mui/material";
import './Usuario.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const UsuarioEdit = (id) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');    

    const currentId = 1;
    const [data, setData] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/usuario', currentId);
                console.log('Dados:', data);
                
                if (!!response) setData(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();        
        
      }, []);

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
                        <Stack
                            spacing={4}
                            alignItems="center"
                            direction="row"
                        >
                            <Button variant="contained" href="/usuario-lista">Cancelar</Button>                    
                            <Button variant="contained">Confirmar</Button>
                            <Navegacao
                                rotaVoltar='/usuario-lista'
                            />
                        </Stack>                   
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default UsuarioEdit;