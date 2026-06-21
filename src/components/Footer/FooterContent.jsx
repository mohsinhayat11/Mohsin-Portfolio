import { motion } from "framer-motion";

function FooterContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-5 text-center lg:text-left"
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent sm:text-4xl">
        MOHSIN HAYAT
      </h2>

      <h3 className="text-xl text-blue-400">
        Software Engineer
      </h3>

      <p className="mx-auto max-w-xl leading-8 text-gray-400 lg:mx-0">
        Passionate Software Engineer focused on building scalable,
        modern and user-friendly digital experiences with clean
        architecture and exceptional design.
      </p>
    </motion.div>
  );
}

export default FooterContent;