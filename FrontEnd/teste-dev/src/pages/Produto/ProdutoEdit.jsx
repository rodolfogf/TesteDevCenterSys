import React, { useEffect, useState} from "react";
import ApiService from "../../services/ApiService";
import { Button, Stack } from "@mui/material";
import './Produto.css'
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const ProdutoEdit = (id) => {

    const [produto, setProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    

    const currentId = 1;
    const [data, setData] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('produto' + produto);
        console.log('descricao' + descricao); 
        console.log('preco' + preco); 
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.getById('/produto', currentId);
                console.log('Dados:', data);
                
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
                        <CustomTextField label='Nome do produto'
                            value={produto}
                            setValue={setProduto}
                        />
                        <CustomTextField label='Descrição'
                            value={descricao}
                            setValue={setDescricao}
                        />                    
                        <CustomTextField label='Preço'
                            value={preco}
                            setValue={setPreco}
                        />
                        <Stack
                            spacing={4}
                            alignItems="center"
                            direction="row"
                        >
                            <Button variant="contained" href='/produto-lista'>Cancelar</Button>                    
                            <Button variant="contained">Confirmar</Button>
                            <Navegacao
                                rotaVoltar='/produto-lista'
                            />
                        </Stack>                   
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default ProdutoEdit;