
import './Home.css'
import {Button, Stack} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';

export default function Home(){
    
    return (
        <div className='container-home'>
            <Stack 
                spacing={3}
                alignItems="right"
                direction="column"
                >
                <Button href="/usuario-lista" 
                    variant="contained"                    
                    startIcon={<AccountCircleIcon />}
                >
                        Usuários
                </Button>
                <Button href="/vendedor-lista"
                    variant="contained"                    
                    startIcon={<RecentActorsIcon />}
                >
                        Vendedores
                </Button>                    
                <Button href="/produto-lista"
                    variant="contained"                    
                    startIcon={<InventoryIcon />}
                >
                        Produtos
                </Button>
                <Button href="/venda"
                    variant="contained"                    
                    startIcon={<MonetizationOnIcon />}
                >
                        Venda
                </Button> 
                <Button href="/venda-lista"
                    variant="contained"                    
                    startIcon={<ReceiptIcon />}
                >
                        Comissões
                </Button>                   
            </Stack>
        </div>
    )    
}