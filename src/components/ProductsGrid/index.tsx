import type { Product } from "../../types/index";

export default function ProductsGrid({ products }: { products: Product[] }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                        >
                            <img
                                alt={"alt"}
                                src={product.image.src}
                                className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
                            />
                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={`/product/${product.handle}`}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {product.title}
                                    </a>
                                </h3>
                                <div className="flex flex-1 flex-col justify-end">
                                    <p className="text-sm italic text-gray-500">
                                        {product.product_type}
                                    </p>
                                    <p className="text-base font-medium text-gray-900">
                                        {
                                            product.variants.find(
                                                (variant) => variant.price_btc
                                            )?.price_btc
                                        }{" "}
                                        BTC
                                    </p>
                                    <p className="text-base font-medium text-gray-900">
                                        {
                                            product.variants.find(
                                                (variant) => variant.price_usd
                                            )?.price_usd
                                        }{" "}
                                        USD
                                    </p>
                                </div>
                                {/* <div>
                                    <SecondaryColorButton onClick={() => {}} />
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
