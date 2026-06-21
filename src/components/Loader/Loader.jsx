import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-5xl font-bold text-transparent"
      >
        MOHSIN HAYAT
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl text-blue-400"
      >
        Software Engineer
      </motion.p>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="mt-10 h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent"
      />
    </div>
  );
}

export default Loader;