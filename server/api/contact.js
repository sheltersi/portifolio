export default defineEventHandler(async (event) => {
    const body = await readBody(event);
  
    const apiKey = " yQGDqSIOcL9kHEwM"; // Replace with your actual API key
  
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        sender: { 
          name: body.name,  
          email: "sheltersibanda002@gmail.com" // Use the user's email as sender
        },
        to: [{ email: "sheltersibanda002@gmail.com", name: "Shelter" }], // Your email
        subject: "New Contact Form Submission",
        htmlContent: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `
      })
    });
  
    if (!response.ok) {
      throw createError({ statusCode: 500, message: "Failed to send email" });
    }
  
    return { message: "Message sent successfully!" };
  });
  