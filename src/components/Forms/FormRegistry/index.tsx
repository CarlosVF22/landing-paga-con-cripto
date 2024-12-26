import React, { useState } from "react";
import { DialogTitle } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartWrapper from "../../Wrapper/CartWrapper";
import { useCart } from "../../../Contexts/CartContext";
import CircleLoadingSpinner from "../../Spinners/CircleLoadingSpinner";

export default function FormRegistry() {
    return (
        <CartWrapper>
            <FormRegistryContent />
        </CartWrapper>
    );
}

function FormRegistryContent() {
    const [messageResponse, setMessageResponse] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const cart = useCart();

    // Manejador de evento onSubmit
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Deshabilitamos el botón para evitar doble envío
        setLoading(true);
        setDisabled(true);

        // Obtenemos la referencia al formulario y su valor de email
        const form = e.currentTarget;
        const email = form.email.value;

        try {
            // Hacemos la petición POST a tu endpoint interno
            const res = await fetch("/api/hubspot/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, cart }),
            });

            const data = await res.json();
            if (data.success) {
                // TODO: Maneja el caso de éxito (mostrar mensaje, cerrar modal, etc.)
                console.log("Contacto registrado con éxito en HubSpot");
                setMessageResponse("Haz sido registrado con éxito");
            }
            if (data.error.category === "INVALID_EMAIL") {
                console.log("Email inválido");
                setMessageResponse("Email inválido");
            }
            if (data.error.category === "CONFLICT") {
                console.log("Email ya registrado");
                setMessageResponse("Email ya registrado");
            }
        } catch (error) {
            // Manejo de errores de fetch o red
            console.error("Error al enviar datos al endpoint:", error);
        } finally {
            // Habilitamos el botón nuevamente
            setDisabled(false);
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-100">
                <CheckIcon
                    aria-hidden="true"
                    className="size-6 text-orange-300"
                />
            </div>
            <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                >
                    obtén tu descuento
                </DialogTitle>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Regístrate y recibe un 10% de descuento en tu primera
                        compra.
                    </p>
                </div>

                {/* Agregamos onSubmit */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            placeholder="correo@gmail.com"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-300 sm:text-sm/6"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            disabled={disabled}
                            type="submit"
                            className={`relative
                                        hover:scale-90
                                         w-full h-[30px] rounded-[16px] ${
                                             loading
                                                 ? "bg-orange-300"
                                                 : "bg-orange_primary shadow-orange_primary"
                                         } text-center text-white shadow-lg transition-all hover:opacity-90 active:transform active:scale-95 overflow-hidden`}
                        >
                            <div className="flex justify-center">
                                {loading && (
                                    <div className="pr-2">
                                        <CircleLoadingSpinner />
                                    </div>
                                )}
                                <span className="relative z-10 font-semibold">
                                    Obtén tu descuento
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-white opacity-20 blur-xl rounded-full scale-150"></div>
                        </button>
                    </div>
                </form>
            </div>
            {messageResponse && (
                <div className="mt-4 text-center bg-orange-200 rounded-lg p-2 text-sm text-orange_primary">
                    {messageResponse}
                </div>
            )}
        </div>
    );
}
