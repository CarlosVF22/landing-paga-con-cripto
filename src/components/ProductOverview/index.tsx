"use client";

import { useState } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Radio,
    RadioGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type { Product } from "../../types";
import CartWrapper from "../Wrapper/CartWrapper";
import { useCart } from "../../Contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";

// const product = {
//     name: "Zip Tote Basket",
//     price: "$140",
//     rating: 4,
//     images: [
//         {
//             id: 1,
//             name: "Angled view",
//             src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
//             alt: "Angled front view with bag zipped and handles upright.",
//         },
//         // More images...
//     ],
//     colors: [
//         {
//             name: "Washed Black",
//             bgColor: "bg-gray-700",
//             selectedColor: "ring-gray-700",
//         },
//         { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
//         {
//             name: "Washed Gray",
//             bgColor: "bg-gray-500",
//             selectedColor: "ring-gray-500",
//         },
//     ],
//     description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//     details: [
//         {
//             name: "Features",
//             items: [
//                 "Multiple strap configurations",
//                 "Spacious interior with top zip",
//                 "Leather handle and tabs",
//                 "Interior dividers",
//                 "Stainless strap loops",
//                 "Double stitched construction",
//                 "Water-resistant",
//             ],
//         },
//         // More sections...
//     ],
// };

export default function ProductOverview({ product }: { product: Product }) {
    return (
        <CartWrapper>
            <ProductOverviewContent product={product} />
        </CartWrapper>
    );
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

function ProductOverviewContent({ product }: { product: Product }) {
    const [selectedColor, setSelectedColor] = useState(["red", "blue"]);
    const { addToCart } = useCart();

    const handleAddToCart = async () => {
        try {
            addToCart({
                id: product.id,
                name: product.title,
                price: product.variants[0].price_btc,
            });
            toast.success("Producto agregado al carrito");
        } catch (error) {
            toast.error("Error al agregar el producto al carrito");
            console.error(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <TabGroup className="flex flex-col-reverse">
                            {/* Image selector */}
                            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                <TabList className="grid grid-cols-4 gap-6">
                                    {product.images.map((image) => (
                                        <Tab
                                            key={image.src}
                                            className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue_primary/50 focus:ring-offset-4"
                                        >
                                            <span className="sr-only">
                                                {image.src}
                                            </span>
                                            <span className="absolute inset-0 overflow-hidden rounded-md">
                                                <img
                                                    alt=""
                                                    src={image.src}
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-blue_primary"
                                            />
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>

                            <TabPanels>
                                {product.images.map((image) => (
                                    <TabPanel key={image.src}>
                                        <img
                                            alt={image.src}
                                            src={image.src}
                                            className="aspect-square w-full object-cover sm:rounded-lg"
                                        />
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                {product.title}
                            </h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-2xl tracking-tight text-gray-900">
                                    {product.variants[0].price_btc} BTC
                                </p>
                            </div>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-xl tracking-tight text-gray-900">
                                    {product.variants[0].price_usd} USD
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    4 > rating
                                                        ? "text-orange_primary"
                                                        : "text-gray-300",
                                                    "size-5 shrink-0"
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">
                                        {4} out of 5 stars
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: product.body_html,
                                    }}
                                    className="space-y-6 text-base text-gray-700"
                                />
                            </div>

                            <form className="mt-6">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600">
                                        Color
                                    </h3>

                                    <fieldset
                                        aria-label="Choose a color"
                                        className="mt-2"
                                    >
                                        <RadioGroup
                                            value={selectedColor}
                                            onChange={setSelectedColor}
                                            className="flex items-center gap-x-3"
                                        >
                                            {["red", "blue"].map((color) => (
                                                <Radio
                                                    key={color}
                                                    value={color}
                                                    aria-label={color}
                                                    className={classNames(
                                                        "blue",
                                                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            "bg-orange_primary",
                                                            "size-8 rounded-full border border-black/10"
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>
                                <div className="mt-10 flex">
                                    <button
                                        type="button"
                                        onClick={async () =>
                                            await handleAddToCart()
                                        }
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-400 px-8 py-3 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>

                                <div className="mt-10 flex">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-orange_primary px-8 py-3 text-base font-medium text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange_primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Comprar ahora
                                    </button>
                                </div>
                            </form>

                            <section
                                aria-labelledby="details-heading"
                                className="mt-12"
                            >
                                <h2 id="details-heading" className="sr-only">
                                    Additional details
                                </h2>

                                <div className="divide-y divide-gray-200 border-t">
                                    {[
                                        {
                                            name: "Features",
                                            items: [
                                                "Multiple strap configurations",
                                                "Spacious interior with top zip",
                                                "Leather handle and tabs",
                                                "Interior dividers",
                                                "Stainless strap loops",
                                                "Double stitched construction",
                                                "Water-resistant",
                                            ],
                                        },
                                        // More sections...
                                    ].map((detail) => (
                                        <Disclosure key={detail.name} as="div">
                                            <h3>
                                                <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                                                    <span className="text-sm font-medium text-gray-900 group-data-[open]:text-blue_primary">
                                                        {detail.name}
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon
                                                            aria-hidden="true"
                                                            className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                                                        />
                                                        <MinusIcon
                                                            aria-hidden="true"
                                                            className="hidden size-6 text-blue_primary group-hover:text-blue_primary group-data-[open]:block"
                                                        />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pb-6">
                                                <ul
                                                    role="list"
                                                    className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                                                >
                                                    {detail.items.map(
                                                        (item) => (
                                                            <li
                                                                key={item}
                                                                className="pl-2"
                                                            >
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
