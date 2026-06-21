import { motion } from "framer-motion";

function ProjectsContent() {
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
          Browse My Recent
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Projects
        </h2>
      </div>

      <p className="max-w-2xl leading-8 text-gray-400">
        Here are some of my projects that demonstrate my skills and
        passion for software development. These projects reflect my
        experience in web development, Python programming, and
        modern application development.
      </p>
    </motion.div>
  );
}

export default ProjectsContent;