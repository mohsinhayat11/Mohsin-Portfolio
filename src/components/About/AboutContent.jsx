import { motion } from "framer-motion";

function AboutContent() {
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
          Get To Know More
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          About Me
        </h2>
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        I am a passionate Software Engineer dedicated to building modern,
        scalable, and user-friendly applications. My interests span across
        Full Stack Development, Frontend Engineering, and Python development.
        I enjoy solving real-world problems through technology and continuously
        learning new tools and frameworks to enhance my skills.
      </p>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        My goal is to create impactful digital solutions with clean design,
        strong architecture, and exceptional user experiences.
      </p>
    </motion.div>
  );
}

export default AboutContent;