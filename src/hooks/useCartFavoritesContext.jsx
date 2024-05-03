import { createContext, useContext, useState } from 'react'

const CartFavoritesContext = createContext()

export const useCartFavoritesContext = () => useContext(CartFavoritesContext)

export const CartFavoritesProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0)
    const [favoritesCount, setFavoritesCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.alt === product.alt)
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems]
            updatedCartItems[existingItemIndex].quantity += 1
            setCartItems(updatedCartItems)
        } else {
            setCartItems([...cartItems, {...product, quantity: 1,}])
        }

        setCartCount(prevCount => prevCount + 1)
    };

    const removeFromCart = (productAlt, removeAll = false) => {
        if (removeAll) {
            const updatedCartItems = cartItems.filter(item => item.alt !== productAlt)
            const remainingItemsCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0)
            setCartItems(updatedCartItems)
            setCartCount(remainingItemsCount)
        } else {
            const updatedCartItems = cartItems.map(item => {
                if (item.alt === productAlt && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            setCartItems(updatedCartItems);
            setCartCount(prevCount => prevCount - 1)
        }
    };
    
    const addToFavorites = (product) => {
        setFavoriteItems(prevItems => [...prevItems, product])
        setFavoritesCount(prevCount => prevCount + 1)
    }

    const removeFromFavorites = (productAlt) => {
        const updatedFavoriteItems = favoriteItems.filter(item => item.alt !== productAlt);
        setFavoriteItems(updatedFavoriteItems);
        setFavoritesCount(prevCount => prevCount - 1);
    };

    return (
        <CartFavoritesContext.Provider 
            value={{ 
                cartCount, 
                favoritesCount, 
                cartItems, 
                favoriteItems,
                addToCart, 
                removeFromCart,
                addToFavorites,
                removeFromFavorites
            }}>
            {children}
        </CartFavoritesContext.Provider>
    );
};
