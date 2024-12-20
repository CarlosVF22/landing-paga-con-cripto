"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    TruckIcon,
    ArrowUturnLeftIcon,
    UserIcon,
} from "@heroicons/react/16/solid";
import Logo from "../../assets/Logo/default.svg";
import PrimaryButton from "../Buttons/PrimaryButton";

// const navigation = [
//     { name: "Product", href: "#" },
//     { name: "Features", href: "#" },
//     { name: "Marketplace", href: "#" },
//     { name: "Company", href: "#" },
// ];

export default function Hero({
    logo = Logo,
}: {
    logo?: string | ImageMetadata;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Paga con cripto</span>
                            <img
                                alt="Logo de paga con cripto"
                                src={logo instanceof Object ? logo.src : logo}
                                className="h-12 md:h-16 w-auto"
                            />
                        </a>
                    </div>
                    <div className="justify-end flex md:hidden">
                        <PrimaryButton width="w-[100px]" text="Descuento" />
                    </div>
                    <div className="justify-end hidden md:flex">
                        <PrimaryButton
                            width="w-[200px]"
                            text="Descuento tu descuento"
                        />
                    </div>
                </nav>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Paga con cripto</span>
                                <img
                                    alt="Logo de paga con cripto"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="flex justify-end">
                                    <PrimaryButton
                                        width="w-[100px]"
                                        text="Obtén tu descuento"
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

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
                        <div className="flex">
                            <span className="inline-flex text-xs mr-2 items-center rounded-md shadow-md shadow-blue_primary bg-blue_primary px-2 py-1 font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                                <TruckIcon className="size-4 mr-1 md:block hidden" />{" "}
                                Envío gratis
                            </span>
                            <span className="inline-flex mr-2 items-center rounded-md shadow-md shadow-blue_primary bg-blue_primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                                <ArrowUturnLeftIcon className="size-4 mr-1 md:block hidden" />{" "}
                                Devoluciones gratis
                            </span>
                            <span className="inline-flex items-center rounded-md bg-blue_primary shadow-md shadow-blue_primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                                <UserIcon className="size-4 mr-1 md:block hidden" />{" "}
                                Atención 24/7
                            </span>
                        </div>
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
                            />
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                        <svg
                            role="img"
                            viewBox="0 0 366 729"
                            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                        >
                            <title>App screenshot</title>
                            <defs>
                                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                    <rect rx={36} width={316} height={684} />
                                </clipPath>
                            </defs>
                            <path
                                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                fill="#4B5563"
                            />
                            <path
                                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                fill="#343E4E"
                            />
                            <foreignObject
                                width={316}
                                height={684}
                                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                transform="translate(24 24)"
                            >
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/component-images/mobile-app-screenshot.png"
                                />
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
