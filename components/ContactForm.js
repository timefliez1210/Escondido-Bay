import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;