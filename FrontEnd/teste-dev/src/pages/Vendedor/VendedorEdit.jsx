import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Button, Stack } from "@mui/material";
import './Vendedor.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const VendedorEdit = (id) => {

    const [nome, setNome] = useState('');
    const [percentual, setPercentual] = useState('');    

    const currentId = 1;
    const [data, setData] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();         
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/vendedor', currentId);
                console.log('Dados:', data);
                
                if (!!response) setData(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();        
        
      }, []);

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
                        <Stack
                            spacing={4}
                            alignItems="center"
                            direction="row"
                        >
                            <Button variant="contained" href="/vendedor-lista">Cancelar</Button>                    
                            <Button variant="contained">Confirmar</Button>
                            <Navegacao
                                rotaVoltar='/vendedor-lista'
                            />
                        </Stack>                   
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default VendedorEdit;