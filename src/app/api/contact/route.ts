import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL || "contact@primeactuaire.com";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Service email non configuré." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { nom, email, societe, message } = body as {
      nom: string;
      email: string;
      societe: string;
      message: string;
    };

    // Validation
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    // Honeypot check (if a hidden field is filled, it's a bot)
    if (body._honey) {
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "PrimeActuaire <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Demande de démo — ${societe || "Non renseigné"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0B1628;">Nouvelle demande depuis le site</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #666; width: 120px;">Nom</td>
              <td style="padding: 8px 12px;">${escapeHtml(nom)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: bold; color: #666;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #666;">Société</td>
              <td style="padding: 8px 12px;">${escapeHtml(societe || "—")}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f5f3ee; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 8px 0 0; color: #333; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Envoyé depuis siteweb-primeactuaire.vercel.app
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
