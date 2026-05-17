import { Resend } from "resend";

// ── Update this once your domain is verified in the Resend dashboard ──
// Before verification  → use "onboarding@resend.dev" (sends to your email only)
// After verification   → use "enquiries@svfsoya.com" or similar
const FROM_ADDRESS = "SVF Soya <onboarding@resend.dev>";
const TO_ADDRESS = "support@svfsoya.com";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, company, phone, email, product, quantity, inquiry_type, message } = body;

    if (!name || !email || !phone) {
      return Response.json({ error: "Name, email and phone are required." }, { status: 400 });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f9f3; border-radius: 12px; overflow: hidden;">
        <div style="background: #209e2e; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Enquiry — SVF Soya</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">Received via svfsoya.com contact form</p>
        </div>
        <div style="padding: 28px 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            ${row("Name", name)}
            ${row("Company", company || "—")}
            ${row("Phone", phone)}
            ${row("Email", email)}
            ${row("Product", product || "—")}
            ${row("Quantity", quantity || "—")}
            ${row("Inquiry Type", inquiry_type || "—")}
          </table>
          ${
            message
              ? `<div style="margin-top: 20px; padding: 16px; background: #f5f9f3; border-radius: 8px; border-left: 3px solid #209e2e;">
                  <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #3d6b44;">Message</p>
                  <p style="margin: 0; font-size: 14px; color: #1d2b22; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
                </div>`
              : ""
          }
        </div>
        <div style="padding: 16px 32px; background: #f5f9f3; border-top: 1px solid #e0ead9;">
          <p style="margin: 0; font-size: 12px; color: #6b8a72;">Reply directly to <a href="mailto:${email}" style="color: #209e2e;">${email}</a></p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ""} — SVF Soya`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr style="border-bottom: 1px solid #f0f5ee;">
      <td style="padding: 10px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b8a72; width: 38%;">${label}</td>
      <td style="padding: 10px 0; font-size: 14px; color: #17261d;">${value}</td>
    </tr>
  `;
}
