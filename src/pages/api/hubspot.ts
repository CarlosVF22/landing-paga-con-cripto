// src/pages/api/hubspotForm.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        // Obtenemos el email desde el body del request
        const { email } = await request.json();

        // Aquí iría la llamada a la API de HubSpot.
        // Ejemplo usando la Forms API:
        //
        // const portalId = 'TU_PORTAL_ID';
        // const formGuid = 'TU_FORM_GUID';
        // const hubspotToken = 'TU_TOKEN_PRIVADO';
        //
        // const hubspotPayload = {
        //   fields: [
        //     { name: "email", value: email },
        //     // Otros campos, si los tuvieses
        //   ],
        // };
        //
        // const hubspotResponse = await fetch(
        //   `https://api.hsforms.net/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${hubspotToken}`,
        //     },
        //     body: JSON.stringify(hubspotPayload),
        //   }
        // );
        //
        // if (!hubspotResponse.ok) {
        //   const error = await hubspotResponse.json();
        //   return new Response(JSON.stringify({ success: false, error }), { status: 500 });
        // }

        // Si todo sale bien:
        return new Response(
            JSON.stringify({ success: true, message: "Contacto registrado" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error en /api/hubspotForm:", error);
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
        });
    }
};
