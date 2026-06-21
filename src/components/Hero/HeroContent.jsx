import { motion } from "framer-motion";
import HeroRoles from "./HeroRoles";
import HeroSocials from "./HeroSocials";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-6"
    >
      <div>
        <p className="text-lg text-gray-400">
          Hi, I'm
        </p>

        <h1 className="mt-3 text-4xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
          MOHSIN HAYAT
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-blue-400 sm:text-2xl">
          Software Engineer
        </h2>

        <HeroRoles />
      </div>

      <p className="mx-auto max-w-2xl leading-8 text-gray-400 lg:mx-0">
        Software Engineer passionate about creating modern, scalable,
        and impactful digital experiences. Specializing in full-stack
        development with a focus on clean architecture, performance,
        and intuitive user interfaces.
      </p>

      <HeroSocials />
    </motion.div>
  );
}

export default HeroContent;