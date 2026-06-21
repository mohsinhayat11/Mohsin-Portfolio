import { motion } from "framer-motion";

function AboutCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid gap-6"
    >
      {/* Education */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Education
        </h3>

        <p className="mt-4 text-gray-400">
          BS Software Engineering
        </p>

        <p className="text-gray-400">
          COMSATS University Islamabad
        </p>

        <p className="text-gray-400">
          2023 - 2027
        </p>
      </div>

      {/* Languages */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Languages
        </h3>

        <p className="mt-4 text-gray-400">
          Pashto • Urdu • English
        </p>
      </div>

      {/* Soft Skills */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Soft Skills
        </h3>

        <div className="mt-4 space-y-2 text-gray-400">
          <p>Problem Solving</p>
          <p>Critical Thinking</p>
          <p>Team Collaboration</p>
          <p>Communication Skills</p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutCards;