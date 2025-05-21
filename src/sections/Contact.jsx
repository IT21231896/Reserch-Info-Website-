import SectionWrapper from "../components/SectionWrapper";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const contactDetails = [
  {
    label: "Email",
    value: "azeesasardeen@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:azeesasardeen@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/asardeen-azees",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/asardeen-azees/"
  }
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      "service_6g54yiu",      // Replace with your actual ID
      "template_j7ri8nu",
      form.current,
      "g2piMoq9nCvGveoim"
    ).then(
      () => {
        setStatus("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        setStatus("Failed to send. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Contact Us</h2>

      {/* Static Contact Info */}
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center mb-10">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Reach out to us directly or drop a message below!
        </p>
        <div className="space-y-3">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-sm">
              <span className="text-primary text-lg">{item.icon}</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition font-medium"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 w-full px-4 py-2 rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 w-full px-4 py-2 rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="mt-1 w-full px-4 py-2 rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-green-600 text-white rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm text-green-500">{status}</p>}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
