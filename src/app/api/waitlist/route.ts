import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // 1. Send confirmation to the user - Refined & Branded Template
        const userMailOptions = {
            from: `"Hypersave" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "You're in. Welcome to the Memory Layer.",
            text: `Welcome to Hypersave. We've added ${email} to our waitlist. You'll be notified as soon as early access is available.`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; color: #000000;">
                    <div style="margin-bottom: 40px; text-align: center;">
                        <img src="https://hypersave.io/logo-black.png" alt="Hypersave" style="height: 32px; width: auto;" />
                    </div>
                    
                    <h1 style="font-size: 32px; font-weight: 800; letter-spacing: -0.04em; line-height: 1; margin-bottom: 24px; text-align: center; font-style: italic;">
                        Don't Remember, <br/> Just Hypersave.
                    </h1>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 32px; text-align: center;">
                        You're officially on the list. We're building Hypersave to be your primary interface for memory—a universal layer that captures and recalls everything in your life. We're excited to have you with us from the start.
                    </p>
                    
                    <div style="background-color: #f5f5f5; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 40px;">
                        <p style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin: 0 0 8px 0;">Current Status</p>
                        <p style="font-size: 18px; font-weight: 600; margin: 0; color: #000;">Early Access Pending</p>
                    </div>

                    <p style="font-size: 14px; line-height: 1.6; color: #666; text-align: center; margin-bottom: 40px;">
                        We'll reach out to <strong>${email}</strong> as soon as your slot is ready. In the meantime, follow our progress:
                    </p>

                    <div style="text-align: center; margin-bottom: 40px;">
                        <a href="https://x.com/hypersaveai" style="display: inline-block; margin: 0 15px; color: #000; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Join X</a>
                        <a href="https://instagram.com/hypersaveai" style="display: inline-block; margin: 0 15px; color: #000; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Instagram</a>
                    </div>

                    <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />
                    
                    <p style="color: #999; font-size: 11px; text-align: center; text-transform: uppercase; letter-spacing: 0.1em;">
                        © 2024 Nuro AI Labs Limited • SAVE EVERYTHING. FIND ANYTHING.
                    </p>
                </div>
            `,
        }

        // 2. Send notification to the team
        const adminMailOptions = {
            from: `"Waitlist Bot" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || "contact@hypersave.io",
            subject: "New Waitlist Signup!",
            text: `New signup: ${email}`,
        }

        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ])

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Waitlist API Error:", error)
        return NextResponse.json({ error: "Failed to join waitlist. Please try again." }, { status: 500 })
    }
}
