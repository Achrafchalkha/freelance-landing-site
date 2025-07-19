import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic sanitization
    const sanitizedData = {
      name: name?.toString().trim(),
      email: email?.toString().trim().toLowerCase(),
      subject: subject?.toString().trim(),
      message: message?.toString().trim(),
    }

    // Validate required fields
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.subject || !sanitizedData.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (sanitizedData.name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      )
    }

    if (sanitizedData.subject.length > 200) {
      return NextResponse.json(
        { error: 'Subject must be less than 200 characters' },
        { status: 400 }
      )
    }

    if (sanitizedData.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be less than 2000 characters' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
        process.env.EMAIL_USER === 'your-email@gmail.com' ||
        process.env.EMAIL_PASS === 'your-app-password') {

      // For development/testing - log the message instead of sending email
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log('Name:', sanitizedData.name)
      console.log('Email:', sanitizedData.email)
      console.log('Subject:', sanitizedData.subject)
      console.log('Message:', sanitizedData.message)
      console.log('Timestamp:', new Date().toISOString())
      console.log('Target Email: highwayaca@gmail.com')
      console.log('================================')

      return NextResponse.json(
        { message: 'Message received successfully! (Email service not configured - check server logs)' },
        { status: 200 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : undefined,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'highwayaca@gmail.com',
      subject: `Contact Form: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F95700;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #F95700; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from the Highway Academy contact form.</p>
            <p>Reply directly to this email to respond to ${sanitizedData.name} at ${sanitizedData.email}</p>
          </div>
        </div>
      `,
      replyTo: sanitizedData.email, // Allow direct reply to the sender
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)

    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send email. Please try again later.'

    if (error instanceof Error) {
      if (error.message.includes('authentication') || error.message.includes('auth')) {
        errorMessage = 'Email authentication failed. Please check email configuration.'
      } else if (error.message.includes('network') || error.message.includes('ENOTFOUND')) {
        errorMessage = 'Network error. Please check your internet connection.'
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Email service timeout. Please try again.'
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
