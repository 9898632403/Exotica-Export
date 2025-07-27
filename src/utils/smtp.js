
export const sendEmail = ({ from_name, from_email, phone, company, service, message }) => {
  return window.Email.send({
    Host: "smtp.gmail.com",
    Username: import.meta.env.VITE_SMTP_EMAIL,
    Password: import.meta.env.VITE_SMTP_PASS,
    To: import.meta.env.VITE_RECEIVER_EMAIL,
    From: import.meta.env.VITE_SMTP_EMAIL,
    Subject: `📦 New Contact Inquiry – ${from_name}`,
    Body: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${from_name}</p>
      <p><b>Email:</b> ${from_email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Service Required:</b> ${service}</p>
      <p><b>Message:</b><br>${message}</p>
    `
  });
};
