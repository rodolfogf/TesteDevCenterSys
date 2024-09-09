
import './Home.css'
import {Button, Stack} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    
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
                <Button 
                    onClick={handleLogout}
                    variant="contained"                    
                    startIcon={<LogoutIcon />}
                >
                        Sair
                </Button>
                                   
            </Stack>
        </div>
    )    
}