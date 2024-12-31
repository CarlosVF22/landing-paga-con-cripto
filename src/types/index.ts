export interface Product {
    id: number;
    title: string;
    body_html: string;
    product_type: string;
    tags: string;
    handle: string;
    status: string;
    image: {
        src: string;
    };
    images: {
        src: string;
    }[];
    variants: {
        price_usd: string;
        price_btc: string;
    }[];
}

// Tipos para los items del carrito
export interface CartItem {
    id: number | string;
    name: string;
    price_usd: string;
    price_btc: string;
    quantity: number;
    image: string;
}

// Tipo con las funciones que proveerá el contexto
export interface CartContextType {
    cart: CartItem[];
    getCart: () => CartItem[];
    addToCart: (product: Omit<CartItem, "quantity">) => void;
    updateProductQuantity: (
        productId: number | string,
        newQuantity: number
    ) => void;
    removeFromCart: (productId: number | string) => void;
    clearCart: () => void;
}
