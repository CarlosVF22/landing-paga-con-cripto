import BannerImgDefault from "../../assets/Banner/default.png";

function Banner({
    children,
    default: defaultHeight = "h-[24rem]",
    sm = "sm:h-[24rem]",
    md = "md:h-[50rem]",
    lg = "lg:h-[33rem]",
    xl = "xl:h-[35rem]",
    xl2 = "2xl:h-[50rem]",
    srcImage = BannerImgDefault,
}: Readonly<{
    children: React.ReactNode;
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xl2?: string;
    srcImage?: string | ImageMetadata;
}>) {
    return (
        <>
            <div
                className={`relative w-full ${defaultHeight} ${sm} ${md} ${lg} ${xl} ${xl2}`}
            >
                <img
                    src={srcImage instanceof Object ? srcImage.src : srcImage}
                    alt="Banner"
                    className="w-full h-full object-cover object-center"
                />
                {children}
            </div>
            <div className="bg-gradient-to-l from-green-light-bio via-cyan-bio to-blue-bio w-full h-3"></div>
        </>
    );
}

export { Banner };
