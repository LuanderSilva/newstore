import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Carrinho from './pages/Carrinho/Carrinho'
import Favoritos from './pages/Favoritos/favoritos'
import { CartFavoritesProvider } from './hooks/useCartFavoritesContext';

function AppRoutes() {
    return (
        <CartFavoritesProvider>
            <Routes>
                <Route
                    path='/'
                    element={<Home title="New Store - A loja do futuro" />}
                />
                <Route
                    path='/Carrinho'
                    element={<Carrinho title="New Store - Carrinho" />}
                />
                <Route
                    path='/Favoritos'
                    element={<Favoritos title="New Store - Favoritos" />}
                />
            </Routes>
        </CartFavoritesProvider>
    )
}

export default AppRoutes