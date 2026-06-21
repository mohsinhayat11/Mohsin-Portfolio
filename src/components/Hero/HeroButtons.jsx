import { motion } from "framer-motion";
import resumeFile from "../../assets/resume/Mohsin_Hayat_Resume.pdf";

function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
    >
      <a
        href={resumeFile}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition duration-500 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition duration-500 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
      >
        Contact Me
      </a>
    </motion.div>
  );
}

export default HeroButtons;