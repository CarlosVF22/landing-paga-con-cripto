import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import CartWrapper from "../Wrapper/CartWrapper";
import { useCart } from "../../Contexts/CartContext";

function Cart() {
    return (
        <CartWrapper>
            <CartContent />
        </CartWrapper>
    );
}

function CartContent() {
    const { getCart } = useCart();
    const cartItems = getCart();

    return (
        <div className="relative">
            <ShoppingCartIcon className="size-8 text-gray-400" />
            {cartItems.length > 0 && (
                <div className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-red-500 animate-pulse flex items-center justify-center"></div>
            )}
        </div>
    );
}

export default Cart;
