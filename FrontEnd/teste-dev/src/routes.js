import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import ProdutoList from './pages/Produto/ProdutoList';
import ProdutoEdit from './pages/Produto/ProdutoEdit';
import ProdutoCreate from './pages/Produto/ProdutoCreate';
import UsuarioList from './pages/Usuario/UsuarioList';
import UsuarioEdit from './pages/Usuario/UsuarioEdit';
import UsuarioCreate from './pages/Usuario/UsuarioCreate';
import VendedorList from './pages/Vendedor/VendedorList';
import VendedorEdit from './pages/Vendedor/VendedorEdit';
import VendedorCreate from './pages/Vendedor/VendedorCreate';
import VendaCreate from './pages/Venda/VendaCreate';
import VendaList from './pages/Venda/VendaList';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/usuario-lista' element={<UsuarioList />}/>
                <Route path='/usuario-editar' element={<UsuarioEdit />}/>
                <Route path='/usuario-criar' element={<UsuarioCreate />}/>
                <Route path='/produto-lista' element={<ProdutoList />}/>
                <Route path='/produto-editar' element={<ProdutoEdit />}/>
                <Route path='/produto-criar' element={<ProdutoCreate />}/>
                <Route path='/vendedor-lista' element={<VendedorList />}/>
                <Route path='/vendedor-editar' element={<VendedorEdit />}/>
                <Route path='/vendedor-criar' element={<VendedorCreate />}/>
                <Route path='/venda' element={<VendaCreate />}/>                
                <Route path='/venda-lista' element={<VendaList />}/>                
            </Routes>
        </BrowserRouter>
    )
}