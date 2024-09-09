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
import ProtectedRoute from './components/route/ProtectedRoute.jsx';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
                <Route path='/usuario-lista' element={<ProtectedRoute><UsuarioList /></ProtectedRoute>} />
                <Route path='/usuario-editar/:id' element={<ProtectedRoute><UsuarioEdit /></ProtectedRoute>} />
                <Route path='/usuario-criar' element={<ProtectedRoute><UsuarioCreate /></ProtectedRoute>} />
                <Route path='/produto-lista' element={<ProtectedRoute><ProdutoList /></ProtectedRoute>} />
                <Route path='/produto-editar/:id' element={<ProtectedRoute><ProdutoEdit /></ProtectedRoute>} />
                <Route path='/produto-criar' element={<ProtectedRoute><ProdutoCreate /></ProtectedRoute>} />
                <Route path='/vendedor-lista' element={<ProtectedRoute><VendedorList /></ProtectedRoute>} />
                <Route path='/vendedor-editar/:id' element={<ProtectedRoute><VendedorEdit /></ProtectedRoute>} />
                <Route path='/vendedor-criar' element={<ProtectedRoute><VendedorCreate /></ProtectedRoute>} />
                <Route path='/venda' element={<ProtectedRoute><VendaCreate /></ProtectedRoute>} />
                <Route path='/venda-lista' element={<ProtectedRoute><VendaList /></ProtectedRoute>} />                
            </Routes>
        </BrowserRouter>
    )
}