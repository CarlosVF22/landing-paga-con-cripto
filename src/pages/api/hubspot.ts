// src/pages/api/hubspotForm.ts
import type { APIRoute } from "astro";
import type { CartItem } from "../../types";

export const POST: APIRoute = async ({ request }) => {
    try {
        // 1. Obtenemos los datos del formulario
        const { email, cart } = await request.json();
        const cartItems = cart.cart as CartItem[];

        // 2. Tu token privado de HubSpot debe estar en variables de entorno
        const hubspotToken = import.meta.env.HUBSPOT_PRIVATE_TOKEN;

        // 3. Crear el contacto en HubSpot
        const contactPayload = {
            properties: { email },
        };
        const responseAddContact = await fetch(
            "https://api.hubapi.com/crm/v3/objects/contacts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hubspotToken}`,
                },
                body: JSON.stringify(contactPayload),
            }
        );

        // **Consume** la respuesta del contacto solo una vez
        const contactData = await responseAddContact.json();

        // 4. Validar la respuesta de contacto
        if (!responseAddContact.ok) {
            console.error("Error al crear contacto en HubSpot:", contactData);
            return new Response(
                JSON.stringify({ success: false, error: contactData }),
                {
                    status: 500,
                }
            );
        }

        // 5. Crear el Deal (incluyendo cart_info si quieres almacenarlo ahí)
        const dealPayload = {
            properties: {
                dealname: "Compra en la tienda",
                amount: 100,
                dealstage: "appointmentscheduled",
                pipeline: "default",
                // Si el nombre interno de tu campo personalizado es "cart_info"
                cart_info: JSON.stringify(cartItems),
            },
        };
        const responseCreateDeal = await fetch(
            "https://api.hubapi.com/crm/v3/objects/deals",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hubspotToken}`,
                },
                body: JSON.stringify(dealPayload),
            }
        );

        // **Consume** la respuesta del Deal solo una vez
        const dealData = await responseCreateDeal.json();

        // 6. Validar la respuesta del Deal
        if (!responseCreateDeal.ok) {
            console.error("Error al crear Deal en HubSpot:", dealData);
            return new Response(
                JSON.stringify({ success: false, error: dealData }),
                {
                    status: 500,
                }
            );
        }

        // 7. Si deseas usar el ID del deal en algún momento
        const dealId = dealData.id;

        // 8. Responder al cliente
        return new Response(
            JSON.stringify({
                success: true,
                data: {
                    hubspotDataContact: contactData,
                    hubspotDataDeal: dealData,
                },
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error en /api/hubspotForm:", error);
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
        });
    }
};
