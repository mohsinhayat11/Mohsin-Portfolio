import { motion } from "framer-motion";

function CertificatesCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Web Development */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Web Development
        </h3>

        <p className="mt-3 text-gray-400">
          Self Learning & Academic Projects
        </p>

        <p className="mt-3 text-blue-400">
          In Progress
        </p>
      </div>

      {/* Python Programming */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Python Programming
        </h3>

        <p className="mt-3 text-gray-400">
          Self Learning
        </p>

        <p className="mt-3 text-blue-400">
          In Progress
        </p>
      </div>
    </motion.div>
  );
}

export default CertificatesCards;