import { createContext, useContext, useState } from 'react';

const CartFavoritesContext = createContext();

export const useCartFavoritesContext = () => useContext(CartFavoritesContext);

export const CartFavoritesProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
        setCartCount(prevCount => prevCount + 1);
    }

    const addToFavorites = (product) => {
        setFavoriteItems(prevItems => [...prevItems, product]);
        setFavoritesCount(prevCount => prevCount + 1);
    }

    return (
        <CartFavoritesContext.Provider 
            value={{ 
                cartCount, 
                favoritesCount, 
                cartItems, 
                favoriteItems,
                addToCart, 
                addToFavorites 
            }}>
            {children}
        </CartFavoritesContext.Provider>
    );
};
