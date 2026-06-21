import { motion } from "framer-motion";

function ExperienceContent() {
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
          Experience
        </h2>
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        My journey in software engineering has been focused on learning,
        building projects, and continuously improving my technical skills.
        I have gained practical experience through academic projects,
        self-learning, and hands-on development.
      </p>
    </motion.div>
  );
}

export default ExperienceContent;