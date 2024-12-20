/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                orange_primary: "#FF9900",
                blue_primary: "#222F5B",
            },
        },
    },
    plugins: [],
};
