import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL || "sidickgoldman@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "PrimeActuaire <noreply@primeactuaire.com>";

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

    if (nom.length > 100 || email.length > 254 || (societe && societe.length > 200) || message.length > 5000) {
      return NextResponse.json(
        { error: "Un ou plusieurs champs dépassent la taille autorisée." },
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

    const result = await resend.emails.send({
      from: FROM_EMAIL,
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
            Envoyé depuis primeactuaire.com
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        { error: result.error.message || "Erreur Resend." },
        { status: 500 }
      );
    }

    // Email de confirmation automatique à l'expéditeur
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Bien reçu — PrimeActuaire",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 32px 0 24px;">
            <h1 style="color: #0B1628; font-size: 24px; margin: 0;">PrimeActuaire</h1>
          </div>
          <div style="padding: 24px; background: #f5f3ee; border-radius: 12px;">
            <p style="color: #333; margin: 0 0 16px; font-size: 16px;">Bonjour ${escapeHtml(nom)},</p>
            <p style="color: #333; margin: 0 0 16px; line-height: 1.6;">
              Merci pour votre message. Nous l'avons bien reçu et reviendrons vers vous dans les plus brefs délais.
            </p>
            <p style="color: #666; margin: 0; font-size: 14px; line-height: 1.6;">
              En attendant, n'hésitez pas à visiter notre site pour en savoir plus sur nos solutions :
              <a href="https://www.primeactuaire.com" style="color: #C5963A;">www.primeactuaire.com</a>
            </p>
          </div>
          <div style="text-align: center; padding: 24px 0; color: #999; font-size: 12px;">
            <p style="margin: 0;">PrimeActuaire — Gouvernance technique · Santé collective · Zone CIMA</p>
            <p style="margin: 8px 0 0;">
              <a href="https://www.primeactuaire.com" style="color: #C5963A; text-decoration: none;">primeactuaire.com</a>
            </p>
          </div>
        </div>
      `,
    }).catch((err) => console.error("Confirmation email error:", err));

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
