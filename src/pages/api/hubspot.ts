// src/pages/api/hubspotForm.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        // 1. Obtenemos los datos del formulario.
        //    (Cambia según tus campos: email, firstname, etc.)
        const { email, firstname, lastname } = await request.json();

        // 2. Tu token privado de HubSpot debe estar en variables de entorno
        //    (por ej., .env) para no exponerlo públicamente.
        const hubspotToken = import.meta.env.HUBSPOT_PRIVATE_TOKEN;

        // 3. Preparamos la data para crear el contacto en HubSpot
        const contactPayload = {
            properties: {
                email,
                firstname,
                lastname,
            },
        };

        // 4. Llamamos a la API de contactos de HubSpot
        //    Documentación: https://developers.hubspot.com/docs/api/crm/contacts
        const response = await fetch(
            "https://api.hubapi.com/crm/v3/objects/contacts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hubspotToken}`, // Token de tu app privada
                },
                body: JSON.stringify(contactPayload),
            }
        );

        // 5. Validamos que la respuesta de HubSpot sea exitosa
        if (!response.ok) {
            const error = await response.json();
            console.error("Error al crear contacto en HubSpot:", error);
            return new Response(JSON.stringify({ success: false, error }), {
                status: 500,
            });
        }

        // 6. Si todo salió bien, parseamos la respuesta y respondemos al cliente
        const hubspotData = await response.json();
        return new Response(
            JSON.stringify({ success: true, data: hubspotData }),
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Error en /api/hubspotForm:", error);
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
        });
    }
};
