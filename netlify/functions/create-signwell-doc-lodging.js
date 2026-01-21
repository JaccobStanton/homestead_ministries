export async function handler(event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email } = body;

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing name or email" }),
      };
    }

    const resp = await fetch(
      "https://www.signwell.com/api/v1/document_templates/documents/",
      {
        method: "POST",
        headers: {
          "X-Api-Key": process.env.SIGNWELL_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template_id: "c10abeea-be1d-4f29-acf4-233c1cf388f3",
          embedded_signing: true,
          embedded_signing_notifications: true,
          recipients: [
            {
              id: "1",
              placeholder_name: "Guest",
              name,
              email,
              send_email: false,
            },
          ],
        }),
      },
    );

    const data = await resp.json();

    // ✅ NEW: if SignWell rejected the request, return the real error
    if (!resp.ok) {
      return {
        statusCode: resp.status,
        body: JSON.stringify({
          error: "SignWell API error",
          details: data,
        }),
      };
    }

    if (data?.error || data?.errors?.length || data?.error_message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "SignWell API error",
          details: data,
        }),
      };
    }

    const embedded_signing_url =
      data?.embedded_signing_url ||
      data?.recipients?.[0]?.embedded_signing_url ||
      data?.recipients?.[0]?.embedded_signing_urls?.[0]?.url ||
      data?.recipients?.[0]?.embedded_signing_urls?.[0];

    if (!embedded_signing_url) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "SignWell did not return embedded_signing_url",
          data,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        embedded_signing_url,
        recipients: data?.recipients,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
