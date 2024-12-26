import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Badges from "../Badges";
import { CartProvider, useCart } from "../../Contexts/CartContext";
import { useEffect, useState } from "react";
import ModalLayout from "../ModalLayout";
import FormRegistry from "../Forms/FormRegistry";

export default function Checkout() {
    return (
        <CartProvider>
            <CheckoutContent />
        </CartProvider>
    );
}

function CheckoutContent() {
    const { cart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState<Record<number, number>>({});
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setQuantities((prev) => {
            const newState = { ...prev };
            cart.forEach((item) => {
                if (!(Number(item.id) in newState)) {
                    newState[Number(item.id)] = 1;
                }
            });
            return newState;
        });
    }, [cart]);

    const total = cart
        .reduce(
            (acc, item) =>
                acc +
                (Number(item.price_usd) || 0) *
                    (quantities[Number(item.id)] || 0),
            0
        )
        .toFixed(2);

    const handleQuantityChange = (productId: number, quantity: number) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: quantity,
        }));
    };

    return (
        <>
            <head>
                <title>Carrito de compras: Paga con Cripto</title>
            </head>
            <div className="bg-white">
                <ModalLayout open={openModal} setOpen={setOpenModal}>
                    <FormRegistry />
                </ModalLayout>
                <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl mt-16 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Carrito de compras
                    </h1>
                    <div className="mt-4">
                        <Badges />
                    </div>
                    {cart.length === 0 ? (
                        <div className="mt-12">
                            <p className="text-center text-gray-500">
                                No hay productos en el carrito
                            </p>
                        </div>
                    ) : (
                        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                            <section
                                aria-labelledby="cart-heading"
                                className="lg:col-span-7"
                            >
                                <h2 id="cart-heading" className="sr-only">
                                    Productos en tu carrito de compras
                                </h2>

                                <ul
                                    role="list"
                                    className="divide-y divide-gray-200 border-b border-t border-gray-200"
                                >
                                    {cart.map((product, productIdx) => (
                                        <li
                                            key={product.id}
                                            className="flex py-6 sm:py-10"
                                        >
                                            <div className="shrink-0">
                                                <img
                                                    alt={product.name}
                                                    title={product.name}
                                                    src={product.image}
                                                    className="size-24 rounded-md object-contain sm:size-48"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a
                                                                    href={
                                                                        product.name
                                                                    }
                                                                    className="font-medium text-gray-700 hover:text-gray-800"
                                                                >
                                                                    {
                                                                        product.name
                                                                    }
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                                            ${" "}
                                                            {product.price_usd}{" "}
                                                            USD
                                                        </p>
                                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                                            {product.price_btc}{" "}
                                                            BTC
                                                        </p>
                                                    </div>

                                                    <div className="mt-4 sm:mt-0 sm:pr-9">
                                                        <div className="grid w-full max-w-16 grid-cols-1">
                                                            <select
                                                                value={
                                                                    quantities[
                                                                        Number(
                                                                            product.id
                                                                        )
                                                                    ]
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const id =
                                                                        parseInt(
                                                                            product.id.toString()
                                                                        );
                                                                    handleQuantityChange(
                                                                        id,
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    );
                                                                }}
                                                                name={`quantity-${productIdx}`}
                                                                aria-label={`Quantity, ${product.name}`}
                                                                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-400 sm:text-sm/6"
                                                            >
                                                                <option
                                                                    value={1}
                                                                >
                                                                    1
                                                                </option>
                                                                <option
                                                                    value={2}
                                                                >
                                                                    2
                                                                </option>
                                                                <option
                                                                    value={3}
                                                                >
                                                                    3
                                                                </option>
                                                                <option
                                                                    value={4}
                                                                >
                                                                    4
                                                                </option>
                                                                <option
                                                                    value={5}
                                                                >
                                                                    5
                                                                </option>
                                                                <option
                                                                    value={6}
                                                                >
                                                                    6
                                                                </option>
                                                                <option
                                                                    value={7}
                                                                >
                                                                    7
                                                                </option>
                                                                <option
                                                                    value={8}
                                                                >
                                                                    8
                                                                </option>
                                                            </select>
                                                            <ChevronDownIcon
                                                                aria-hidden="true"
                                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                            />
                                                        </div>

                                                        <div className="absolute right-0 top-0">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeFromCart(
                                                                        product.id
                                                                    )
                                                                }
                                                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <span className="sr-only">
                                                                    Remove
                                                                </span>
                                                                <XMarkIcon
                                                                    aria-hidden="true"
                                                                    className="size-5"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Order summary */}
                            <section
                                aria-labelledby="summary-heading"
                                className="mt-16 rounded-lg bg-orange_primary/10 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                            >
                                <h2
                                    id="summary-heading"
                                    className="text-lg font-medium text-gray-900"
                                >
                                    Order summary
                                </h2>

                                <dl className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-600">
                                            Subtotal
                                        </dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            $ {total} USD
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-orange_primary pt-4">
                                        <dt className="flex items-center text-sm text-gray-600">
                                            <span>Envío</span>
                                            <a
                                                href="#"
                                                className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">
                                                    Learn more about how
                                                    shipping is calculated
                                                </span>
                                                <QuestionMarkCircleIcon
                                                    aria-hidden="true"
                                                    className="size-5"
                                                />
                                            </a>
                                        </dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            GRATIS
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-orange_primary pt-4">
                                        <dt className="text-base font-medium text-gray-900">
                                            Total
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            $ {total} USD
                                        </dd>
                                    </div>
                                </dl>

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpenModal(true);
                                        }}
                                        className="w-full rounded-md border border-transparent bg-orange_primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        ¡ Lo quiero !
                                    </button>
                                </div>
                            </section>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}
