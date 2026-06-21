import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

function FooterSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-6 text-center lg:text-right"
    >
      <h3 className="text-2xl font-semibold text-white">
        Connect With Me
      </h3>

      <div className="flex justify-center gap-6 text-3xl lg:justify-end">

        {/* GitHub */}
        <a
          href="https://github.com/mohsinhayat11"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-800 bg-gray-900 p-3 text-gray-400 transition duration-300 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mohsin-hayat12/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-800 bg-gray-900 p-3 text-gray-400 transition duration-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:mohsinmalak745@gmail.com"
          className="rounded-2xl border border-gray-800 bg-gray-900 p-3 text-gray-400 transition duration-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_20px_rgba(248,113,113,0.4)]"
        >
          <FaEnvelope />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923139654056"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-800 bg-gray-900 p-3 text-gray-400 transition duration-300 hover:border-green-500 hover:text-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
        >
          <FaWhatsapp />
        </a>

      </div>
    </motion.div>
  );
}

export default FooterSocials;