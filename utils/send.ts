import "$std/dotenv/load.ts";

const MAILGUN_DOMAIN = "sandbox1afa57fd9c7e4d9d9b25ca4d772fae8e.mailgun.org";
const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");

if (!MAILGUN_API_KEY) {
  console.warn("MAILGUN_API_KEY environment variable not set.");
}

export async function sendMail(
  to: string,
  subject: string,
  text: string,
) {
  if (!MAILGUN_API_KEY) {
    throw new Error("MAILGUN_API_KEY is required to send emails.");
  }

  const from = "Mailgun Sandbox <postmaster@sandbox1afa57fd9c7e4d9d9b25ca4d772fae8e.mailgun.org>";
  const formData = new FormData();
  formData.append("from", from);
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("text", text);

  //const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;
  const url = `localhost`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mailgun error:", errorText);
      throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("Mailgun response:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
