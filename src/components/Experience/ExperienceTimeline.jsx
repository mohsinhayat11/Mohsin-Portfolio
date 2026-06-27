import { motion } from "framer-motion";

function ExperienceTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Education */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Software Engineering Student 
        </h3>

        <p className="mt-3 text-gray-400">
          COMSATS University Islamabad Attock Campus
        </p>

        <p className="text-gray-500">
          2023 - Present
        </p>
      </div>

      {/* Frontend */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Frontend Development
        </h3>

        <p className="mt-3 text-gray-400">
          HTML • CSS • JavaScript • React • Tailwind CSS
        </p>
      </div>

      {/* Full Stack */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Full Stack Development
        </h3>

        <p className="mt-3 text-gray-400">
          Node.js • Express.js • MongoDB
        </p>
      </div>

      {/* Python */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:border-blue-500">
        <h3 className="text-2xl font-semibold text-white">
          Python Development
        </h3>

        <p className="mt-3 text-gray-400">
          Problem Solving and Application Development
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceTimeline;