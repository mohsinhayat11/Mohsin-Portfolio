import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function HeroSocials() {
  return (
    <div className="mt-8 flex justify-center gap-6 lg:justify-start">

      <a
        href="https://github.com/mohsinhayat11"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_12px_white]"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mohsin-hayat12/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_12px_#60A5FA]"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mohsinmalak745@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Mohsin,%0A%0AI%20visited%20your%20portfolio..."
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_#F87171]"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://wa.me/923139654056"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition duration-300 hover:text-green-400 hover:drop-shadow-[0_0_12px_#4ADE80]"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default HeroSocials;