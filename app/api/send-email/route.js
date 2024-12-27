import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { to, subject, text } = await request.json();  // Get the form data

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "snapuworkmail1dec24@gmail.com",  // Your Gmail address
        pass: "262001",      // Your Gmail App password
      },
    });

    const mailOptions = {
      from: "snapuworkmail2@gmail.com", // Sender email
      to,                          // Receiver email
      subject,                     // Subject
      text,                        // Message body
    };

    const info = await transporter.sendMail(mailOptions); // Send email


    nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "snapuworkmail1de24@gmail.com",
          pass: "262001",
        },
      });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}
