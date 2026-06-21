import { motion } from "framer-motion";

function CertificatesContent() {
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
          Browse My
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Certificates
        </h2>
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        I continuously strive to improve my knowledge and skills through
        learning, projects, and certifications. These certifications
        represent my dedication to professional growth and continuous
        learning.
      </p>
    </motion.div>
  );
}

export default CertificatesContent;