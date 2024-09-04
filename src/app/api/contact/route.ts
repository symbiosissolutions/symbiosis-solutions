import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Get form data
  const { name, email, organizationName, message } = await request.json();

  // Create a new OAuth2 client using the Google Auth library
  const OAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  OAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  try {
    const accessToken = await OAuth2Client.getAccessToken();

    // Configure the email transporter with OAuth2 authentication
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        type: "OAuth2",
        user: process.env.RECIPIENT_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.RECIPIENT_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission (Symbiosis Website) from ${name}`,
      text: `${message}\n\nRegards,\n${name}\n${organizationName}`,
      // Sender's email address
      replyTo: email, 
    };

    // Attempt to send the email using the transporter
    await transporter.sendMail(mailOptions);

    // Return a success response if the email was sent successfully
    return NextResponse.json({ message: "Message Sent Successfully" });
  } catch (error: any) {
    console.error("Error submitting message: ", error.message);

    return NextResponse.json(
      { message: "Error submitting message", error: error.message },
      { status: 500 }
    );
  }
}