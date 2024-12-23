import { DialogTitle } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../../Buttons/PrimaryButton";

export default function FormRegistry() {
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
                <form>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="correo@gmail.com"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="mt-4">
                        <PrimaryButton
                            height="h-[40px]"
                            text="Obtén tu descuento"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
