'use client';
import SocialMediaLinks from "../componentssecond/SocialMediaLinks";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        formRef.current, // Form reference
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatus("Error sending email.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4 max-w-5xl mx-auto">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <input
            type="hidden"
            name="to_name"
            value="Sarath" // Static recipient name
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>

      {/* Social Media Links Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default ContactForm;
