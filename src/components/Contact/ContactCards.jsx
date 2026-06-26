import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function ContactCards() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "https://mohsin-portfolio-backend-lud6.onrender.com/api/contact",
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <form
        onSubmit={sendMessage}
        className="space-y-6 rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none focus:border-blue-500"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-800 bg-black p-4 text-white outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white hover:bg-blue-600"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}

export default ContactCards;