import { useState } from "react";
import Logo from "../../assets/Logo/default.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import Cart from "../Cart";

const Header = ({
    logo = Logo,
    hiddenCallToAction = false,
}: {
    logo?: string | ImageMetadata;
    hiddenCallToAction?: boolean;
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
                        <span className="sr-only">Paga con cripto</span>
                        <img
                            alt="Logo de paga con cripto"
                            src={logo instanceof Object ? logo.src : logo}
                            className="h-12 md:h-16 w-auto"
                        />
                    </a>
                </div>
                <div className="md:mr-10">
                    <Cart />
                </div>
                {!hiddenCallToAction && (
                    <div className="justify-end flex md:hidden">
                        <PrimaryButton
                            width="w-[100px]"
                            text="Descuento"
                            onClick={() => {
                                console.log("click en call to action");
                                window.location.href = "/#products";
                            }}
                        />
                    </div>
                )}
                {!hiddenCallToAction && (
                    <div className="justify-end hidden md:flex">
                        <PrimaryButton
                            width="w-[200px]"
                            text="Descuento tu descuento"
                            onClick={() => {
                                window.location.href = "/#products";
                            }}
                        />
                    </div>
                )}
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
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
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            {!hiddenCallToAction && (
                                <div className="flex justify-end">
                                    <PrimaryButton
                                        width="w-[100px]"
                                        text="Obtén tu descuento"
                                        onClick={() => {
                                            window.location.href = "/#products";
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;
