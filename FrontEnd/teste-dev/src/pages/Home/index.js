
import './Home.css'
import { useState } from 'react';
import {Button, Stack} from '@mui/material'; 

export default function Home(){
    
    return (
        <div className='container-home'>
            <Stack 
                spacing={3}
                alignItems="right"
                direction="column"
                >
                <Button href="/usuario-lista" 
                    variant="contained">
                        Usuários
                </Button>
                <Button href="/vendedor-lista"
                    variant="contained">
                        Vendedores
                </Button>                    
                <Button href="/produto-lista"
                    variant="contained">
                        Produtos
                </Button>
                <Button href="/venda"
                    variant="contained">
                        Venda
                </Button> 
                <Button href="/venda-lista"
                    variant="contained">
                        Comissões
                </Button>                   
            </Stack>
        </div>
    )    
}