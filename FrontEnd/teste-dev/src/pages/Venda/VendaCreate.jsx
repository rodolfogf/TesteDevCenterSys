import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import './Venda.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import CustomAutoComplete from "../../components/custom/CustomAutoComplete";
import Navegacao from "../../components/custom/Navegacao";

const VendaCreate = () => {
       
    const [vendedor, setVendedor] = useState(null);     
    const [produto, setProduto] = useState(null);
    const [quantidade, setQuantidade] = useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();         
    }

    const mockVendedores = [
        { nome: "Leo", percentual: 5, "valorComissoes": 1000.0 },
        { nome: "Ju", percentual: 5, "valorComissoes": 2000.0 }
      ];

    const mockVendedoresProdutos = [
        { nome: "Eisenbahn Pilsen", descricao: "Cerveja Lata 355 ml", "preco": 1.0 },
        { nome: "Arroz Codil", descricao: "Arroz Tipo 1 5Kg", "preco": 19.0 }
      ];

    return (
        <div className='container-venda'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Registrar uma venda"
                ></Subtitulo>
                <Subtitulo
                    texto=""
                ></Subtitulo>
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomAutoComplete 
                            label='Vendedor'
                            value={vendedor}
                            onChange={(event, newValue) => setVendedor(newValue)}
                            options={mockVendedores}
                            getOptionLabel={(option) => option.nome}
                            renderInput={(params) => <TextField {...params} label="Selecione o Vendedor"/>}
                            isOptionEqualToValue={(option, value) => option.nome === value?.nome}
                        />
                        <CustomAutoComplete 
                            label='Produto'
                            value={produto}
                            onChange={(event, newValue) => setProduto(newValue)}
                            options={mockVendedoresProdutos}
                            getOptionLabel={(option) => option.nome}
                            renderInput={(params) => <TextField {...params} label="Selecione o Produto" />}
                            isOptionEqualToValue={(option, value) => option.nome === value?.nome}
                        />
                        <CustomTextField 
                            label='Quantidade'
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />                   
                        <Button variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/'
                        />                    
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default VendaCreate;