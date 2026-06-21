import { motion } from "framer-motion";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div>
        <p className="text-lg text-blue-400">
          Get In Touch
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Contact Me
        </h2>
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        Feel free to reach out for collaborations, freelance projects,
        internships, or opportunities. I'm always open to discussing
        innovative ideas and exciting projects.
      </p>
    </motion.div>
  );
}

export default ContactContent;