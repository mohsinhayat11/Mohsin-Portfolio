import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile.png";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <div className="overflow-hidden rounded-full border-4 border-blue-500 bg-gray-900 p-2 shadow-[0_0_60px_rgba(59,130,246,0.45)] transition duration-500 hover:shadow-[0_0_90px_rgba(59,130,246,0.7)]">
        <img
          src={profileImage}
          alt="Mohsin Hayat"
          className="h-[260px] w-[260px] rounded-full object-cover sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]"
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;