import { Button, Stack } from "@mui/material";
import './Vendedor.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const VendedorCreate = () => {
    const [nome, setNome] = useState('');
    const [percentual, setPercentual] = useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();         
    }
    return (
        <div className='container-vendedor'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastre um vendedor"
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
                            label='Percentual de comissão'
                            value={percentual}
                            onChange={(e) => setPercentual(e.target.value)}
                        />                   
                        <Button variant="contained" href='/vendedor-lista'>Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/vendedor-lista'
                        />                   
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default VendedorCreate;