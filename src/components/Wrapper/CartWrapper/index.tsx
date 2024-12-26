import { CartProvider } from "../../../Contexts/CartContext";
import type { ReactNode } from "react";

export default function CartWrapper({ children }: { children: ReactNode }) {
    return <CartProvider>{children}</CartProvider>;
}
