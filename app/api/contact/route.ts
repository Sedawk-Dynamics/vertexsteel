import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

type Body = {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

const sanitize = (v?: string) => (v || "").trim()

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    const name = sanitize(body.name)
    const email = sanitize(body.email)
    const phone = sanitize(body.phone)
    const company = sanitize(body.company)
    const message = sanitize(body.message)

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, Email, Phone and Message are required." },
        { status: 400 }
      )
    }

    const subject = `New Enquiry – Vertex Steel & Engineering Services`

    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "—"}

Message:
${message}
`.trim()

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "—"}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap;">${message}</pre>
      <hr />
      <p>Sent from Vertex Steel & Engineering Services website</p>
    `

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!host || !user || !pass) {
      console.error("SMTP not configured")
      return NextResponse.json({ error: "Mailer not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Vertex Website" <${process.env.FROM_EMAIL || user}>`,
      to: process.env.TO_EMAIL || user,
      subject,
      text,
      html,
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact API Error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
