import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactCards() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_kf71jin",
        "template_1czvw6c",
        form.current,
        "d3j9OJeflMDPhM1S_"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
      >
        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none transition duration-300 focus:border-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none transition duration-300 focus:border-blue-500"
        />

        {/* Message */}
        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none transition duration-300 focus:border-blue-500"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-center text-green-400">
            {success}
          </p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactCards;