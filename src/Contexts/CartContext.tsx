import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";
import CryptoJS from "crypto-js";
import type { CartItem, CartContextType } from "../types";

// Clave de encriptación: reemplaza con una segura y que no se comparta en frontend
const SECRET_KEY = "TU_CLAVE_SECRETA_AQUI";

// Función para encriptar un objeto/array a string
export function encryptData<T>(data: T): string {
    const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        SECRET_KEY
    ).toString();
    return ciphertext;
}

// Función para desencriptar y parsear string a un objeto/array
export function decryptData<T>(ciphertext: string): T | null {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
        const decryptedData = JSON.parse(
            bytes.toString(CryptoJS.enc.Utf8)
        ) as T;
        return decryptedData;
    } catch (error) {
        console.error("Error desencriptando datos:", error);
        return null;
    }
}

// 1. Crear el contexto
export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const decryptedCart = decryptData<CartItem[]>(storedCart);
            if (decryptedCart) {
                setCart(decryptedCart);
            }
        }
    }, []);

    useEffect(() => {
        const encryptedCart = encryptData<CartItem[]>(cart);
        localStorage.setItem("cart", encryptedCart);
    }, [cart]);

    /** -----------------------------------------
     *  Implementación de funciones CRUD
     *  -----------------------------------------
     */

    const getCart = (): CartItem[] => {
        return cart;
    };

    // Agregar producto al carrito
    const addToCart = (product: Omit<CartItem, "quantity">): void => {
        const existingIndex = cart.findIndex((item) => item.id === product.id);
        if (existingIndex !== -1) {
            // Ya existe, aumentar quantity
            const updatedCart = [...cart];
            updatedCart[existingIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // No existe, lo agregamos con cantidad 1
            const newItem: CartItem = {
                ...product,
                quantity: 1,
            };
            setCart([...cart, newItem]);
        }
    };

    // Actualizar cantidad
    const updateProductQuantity = (
        productId: number | string,
        newQuantity: number
    ): void => {
        const updatedCart = cart.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    // Eliminar producto
    const removeFromCart = (productId: number | string): void => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    // Vaciar carrito
    const clearCart = (): void => {
        setCart([]);
    };

    // Retornamos el contexto
    const contextValue: CartContextType = {
        cart,
        getCart,
        addToCart,
        updateProductQuantity,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// 5. Crear un hook para usar nuestro contexto de forma más cómoda
export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
}
