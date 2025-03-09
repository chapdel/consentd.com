import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  try {
    const data = await resend.emails.send({
      from: "Consentd <newsletter@consentd.com>",
      to: [email],
      subject: "Welcome to Consentd Newsletter",
      html: "<p>Thank you for subscribing to our newsletter!</p>",
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

