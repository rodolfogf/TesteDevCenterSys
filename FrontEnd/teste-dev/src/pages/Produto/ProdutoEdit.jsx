import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Button, Stack } from "@mui/material";
import './Produto.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";


const ProdutoEdit = (id) => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');    

    const [data, setData] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('nome' + nome);
        console.log('descricao' + descricao); 
        console.log('preco' + preco); 
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/produto', id);
                console.log('response:', response);
                
                if (!!response) setData(response);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchData();        
        
      }, []);

      return (
        <div className='container-produto'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastro de Produto"
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
                            label='Nome do produto'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <CustomTextField
                            label='Descrição'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />                    
                        <CustomTextField
                            label='Preço'
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                            <Button variant="contained" href='/produto-lista'>Cancelar</Button>                    
                            <Button variant="contained">Confirmar</Button>
                            <Navegacao
                                rotaVoltar='/produto-lista'
                            />
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default ProdutoEdit;