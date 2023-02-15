import nodemailer from 'nodemailer';
import { FiBattery } from 'react-icons/fi';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'escondidobay2022@gmail.com',
      pass: 'Escondido2022!'
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'escondidobay2022@gmail.com',
      subject: subject,
      text: message
    });

    res.status(200).json({ message: 'Message sent successfully', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending the message', error });
  }
}