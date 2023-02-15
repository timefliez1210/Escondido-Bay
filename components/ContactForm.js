import React, { useState } from 'react';
import Image from 'next/legacy/image'

const ContactForm = (props) => {
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
    <div>
    <div className="wrapper">
        <div className='image-container'>
        <Image
             src={props.src}
             alt={props.alt}
             layout={props.layout}
             objectFit={props.objectFit}
        />
          </div> 
         <div className="content">
         <form onSubmit={handleSubmit}>
      <h2>Get in Touch with Escondido Bay Dive Center</h2>
      <div className="divider"></div>
      <label>
        <input placeholder="Name" className="feedback-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        
        <input placeholder="Email" className="feedback-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        <input placeholder="Subject" className="feedback-input" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </label>
      <br />
      <label>
        <textarea placeholder="Message" className="feedback-input" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
          </div>
          
      </div>
       <style jsx>{`
            .feedback-input {
              color:white;
              font-family: Helvetica, Arial, sans-serif;
              font-weight:500;
              font-size: 18px;
              border-radius: 5px;
              line-height: 22px;
              background-color: transparent;
              border:2px solid white;
              transition: all 0.3s;
              padding: 13px;
              margin-bottom: 15px;
              width:100%;
              box-sizing: border-box;
              outline:0;
            }
            
            .feedback-input:focus { border:2px solid #FF7F50; }
            
            textarea {
              height: 150px;
              line-height: 150%;
              resize:vertical;
            }
            
            [type="submit"] {
              font-family: 'Montserrat', Arial, Helvetica, sans-serif;
              width: 100%;
              background:#FF7F50;
              border-radius:5px;
              border:0;
              cursor:pointer;
              color:white;
              font-size:24px;
              padding-top:10px;
              padding-bottom:10px;
              transition: all 0.3s;
              margin-top:-4px;
              font-weight:700;
            }
            [type="submit"]:hover { background:#CC4949; }
             .divider {
                height: 3px;
                width: 40%;
                background: white;
                margin: 40px auto;
              }
              h2,
              h3 {
                text-align: center;
              
              }
              p {
                text-align: left;
                white-space: pre-line;
              }
              .image-container {
                height: auto;
                width: 100%;
                min-height: 200px;

                position: relative;
                padding: auto auto;
            }
              
                .wrapper {
                  display: -ms-grid;
                  display: grid;
                  -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
                      grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
                  grid-gap: 20px;
                  height: auto;
                  width: auto;
                  text-align: center;
                  content: center center;
                  padding: 20px;
                  margin: 150px 0 0 0;
              } 
              @media screen and (max-width: 800px) {
                .wrapper {
                  grid-gap: 40px;
                  padding: 50px 10px;
                  margin: 50px 0 0 0;
                }
                .image-container {
                    
                }
              }
              .content {
                background: transparent;
              }
       `}</style>
    </div>
  );
};

export default ContactForm;