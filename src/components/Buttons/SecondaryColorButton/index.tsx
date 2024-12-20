import { ShoppingCartIcon } from "@heroicons/react/16/solid";

export default function SecondaryColorButton({
    width = "w-full",
    text = "Agrega al carrito",
    height = "h-[52px]",
    onClick = () => {},
}: {
    width?: string;
    text?: string;
    height?: string;
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative
                  hover:scale-90
                  shadow-blue_primary ${width} ${height} rounded-[16px] bg-blue_primary text-center text-white shadow-lg transition-all hover:opacity-90 active:transform active:scale-95 overflow-hidden`}
        >
            <div className="relative z-10 font-semibold flex items-center justify-center gap-2">
                <ShoppingCartIcon className="w-6 h-6" />
                <span>{text}</span>
            </div>
            <div className="absolute inset-0 bg-white opacity-20 blur-xl rounded-full scale-150"></div>
        </button>
    );
}
