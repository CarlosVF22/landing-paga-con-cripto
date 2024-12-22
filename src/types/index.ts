export interface Product {
    id: number;
    title: string;
    body_html: string;
    product_type: string;
    handle: string;
    status: string;
    image: {
        src: string;
    };
    images: {
        src: string;
    }[];
    variants: {
        price_usd: string;
        price_btc: string;
    }[];
}
