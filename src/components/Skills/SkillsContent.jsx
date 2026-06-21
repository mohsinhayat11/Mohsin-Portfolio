import { motion } from "framer-motion";

function SkillsContent() {
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
          Explore My
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Skills
        </h2>
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        I specialize in building modern, scalable and responsive applications.
        My expertise spans across frontend development, backend technologies,
        programming languages and databases with a focus on performance and
        clean architecture.
      </p>
    </motion.div>
  );
}

export default SkillsContent;