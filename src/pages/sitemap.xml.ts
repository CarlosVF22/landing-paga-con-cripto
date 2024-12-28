import type { APIRoute } from "astro";
import productsRaw from "../data/products.json";

const SITE_URL = import.meta.env.SITE;

const generateSitemap = () => {
    // Extraer las handles de los productos para generar las URLs
    const productUrls = productsRaw
        .filter((product) => product.status === "active") // Filtra solo los productos activos
        .map(
            (product) =>
                `<url>
          <loc>${SITE_URL}/products/${product.handle}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("\n");

    // Generar el contenido del sitemap
    return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${productUrls}
    </urlset>
  `.trim();
};

export const GET: APIRoute = () => {
    const sitemap = generateSitemap();

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
};
