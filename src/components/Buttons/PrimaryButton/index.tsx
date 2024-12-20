export default function PrimaryButton({
    width = "w-full",
    text = "Obtén Acceso Temprano",
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
                  shadow-orange_primary ${width} ${height} rounded-[16px] bg-orange_primary text-center text-white shadow-lg transition-all hover:opacity-90 active:transform active:scale-95 overflow-hidden`}
        >
            <span className="relative z-10 font-semibold">{text}</span>
            <div
                className="absolute inset-0 bg-white opacity-20 blur-xl rounded-full scale-150
              
              "
            ></div>
        </button>
    );
}
