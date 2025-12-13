import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("API HIT");

  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ayushmaan27122009@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    });

    console.log(result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
