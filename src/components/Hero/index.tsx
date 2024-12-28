import PrimaryButton from "../Buttons/PrimaryButton";
import Badges from "../Badges";
import PhoneImage from "../../assets/Banner/phone.png";

export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate pt-14">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg
                        x="50%"
                        y={-1}
                        className="overflow-visible fill-gray-50"
                    >
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                    />
                </svg>
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <Badges />
                        <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Paga con{" "}
                            <span className="text-orange_primary">
                                criptomonedas
                            </span>{" "}
                            de forma{" "}
                            <span className="text-orange_primary">
                                fácil, segura y rápida.
                            </span>
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            <span className="font-bold">
                                Compra cualquier producto
                            </span>{" "}
                            con entregas gratis a toda Colombia, 30 días para
                            devoluciones y soporte 24/7. Tu seguridad y
                            satisfacción son nuestra prioridad.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <PrimaryButton
                                width="w-[400px]"
                                text="Obtén un descuento de 10% en tu primera compra"
                                onClick={() => {
                                    window.gtag(
                                        "event",
                                        "click_call_to_action",
                                        {
                                            event_category: "engagement",
                                            event_label: "hero_call_to_action",
                                        }
                                    );
                                    window.location.href = "/#products";
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-16 flex justify-center sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                        <img
                            alt="Imagen de un teléfono móvil con la pagina de checkout mostrando que se puede pagar con criptomonedas"
                            title="Imagen de un teléfono móvil con la pagina de checkout mostrando que se puede pagar con criptomonedas"
                            src={PhoneImage.src}
                            width={316}
                            height={684}
                            loading="eager"
                            fetchPriority="high"
                            decoding="sync"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
