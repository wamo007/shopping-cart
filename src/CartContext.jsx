/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find(cartItem => cartItem.title === item.title);
            if (itemExists) {
                return prevCart.map(cartItem =>
                    cartItem.title === item.title
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });

        setCartCount(prevCount => prevCount + 1);
    };

    const removeFromCart = (title) => {
        setCart(prevCart => {
            const item = prevCart.find(cartItem => cartItem.title === title);
            if (item) {
                setCartCount(prevCount => Math.max(prevCount - item.quantity, 0));
                return prevCart.filter(cartItem => cartItem.title !== title);
            }
            return prevCart;
        });
    };

    const removeOneFromCart = (title, quantity) => {
        setCart(prevCart => {
            const item = prevCart.find(cartItem => cartItem.title === title);
            if (quantity > 1) {
                setCartCount(prevCount => Math.max(prevCount - 1, 0)); 
                return prevCart.map(cartItem =>
                    cartItem.title === item.title
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else if (quantity === 1) {
                removeFromCart(title);
            }
            return prevCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        setCartCount(0);
    };

    return (
        <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, removeOneFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
