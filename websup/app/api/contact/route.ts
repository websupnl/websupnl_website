import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL || "info@websup.nl";

    if (!BREVO_API_KEY) {
      // Development fallback — log to console
      console.log("Contact form submission:", { name, email, phone, company, subject, message });
      return NextResponse.json({ success: true });
    }

    const emailBody = `
Nieuw contactbericht via WebsUp.nl

Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || "Niet opgegeven"}
Bedrijf: ${company || "Niet opgegeven"}
Onderwerp: ${subject || "Niet opgegeven"}

Bericht:
${message}
    `.trim();

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "WebsUp Contact", email: "noreply@websup.nl" },
        to: [{ email: TO_EMAIL, name: "Daan Koolhaas" }],
        replyTo: { email, name },
        subject: `Nieuw bericht: ${subject || "Contact via websup.nl"} — van ${name}`,
        textContent: emailBody,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09101D; color: #fff; padding: 32px; border-radius: 12px;">
            <h2 style="color: #FFA500; margin-bottom: 24px;">Nieuw contactbericht via WebsUp.nl</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Naam</td><td style="padding: 8px 0; color: #fff;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0; color: #fff;"><a href="mailto:${email}" style="color: #FFA500;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af;">Telefoon</td><td style="padding: 8px 0; color: #fff;">${phone || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af;">Bedrijf</td><td style="padding: 8px 0; color: #fff;">${company || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af;">Onderwerp</td><td style="padding: 8px 0; color: #fff;">${subject || "—"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #13213C; border-radius: 8px; border-left: 3px solid #FFA500;">
              <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px;">Bericht:</p>
              <p style="color: #fff; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Brevo error:", error);
      return NextResponse.json({ error: "Email verzenden mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
