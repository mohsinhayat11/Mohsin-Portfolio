import { motion } from "framer-motion";

import image1 from "../../assets/images/projects/image1.jpeg";
import image2 from "../../assets/images/projects/image2.jpeg";
import image3 from "../../assets/images/projects/image3.jpeg";

import map1 from "../../assets/images/projects/map1.jpeg";
import map2 from "../../assets/images/projects/map2.jpeg";
import map3 from "../../assets/images/projects/map3.jpeg";
import map4 from "../../assets/images/projects/map4.jpeg";

import what1 from "../../assets/images/projects/what1.jpeg";
import what2 from "../../assets/images/projects/what2.jpeg";
import what3 from "../../assets/images/projects/what3.jpeg";

function ProjectsCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* CEO Dashboard */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
        <h3 className="text-2xl font-semibold text-white">
          CEO Dashboard App
        </h3>

        <p className="mt-4 text-gray-400">
          A mobile application designed for business management,
          analytics and dashboard monitoring with a modern UI.
        </p>

        <p className="mt-4 text-blue-400">
          React Native • Expo • JavaScript
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/mohsinhayat11/CEO-DASHBOARD-APP"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-center font-medium text-black transition duration-500 hover:bg-blue-500 hover:text-white"
          >
            GitHub Repository
          </a>

          <button className="rounded-xl border border-gray-700 px-5 py-3 text-gray-300 transition duration-500 hover:border-blue-500 hover:text-white">
            Coming Soon
          </button>
        </div>
      </div>

      {/* AI Sentiment Analysis */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <img
            src={image1}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={image2}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={image3}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          AI Sentiment Analysis Flask
        </h3>

        <p className="mt-4 text-gray-400">
          Machine learning application that predicts sentiment using
          Python, Flask and NLP techniques.
        </p>

        <p className="mt-4 text-blue-400">
          Python • Flask • Machine Learning
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/mohsinhayat11/AI-Sentiment-Analysis-Flask"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-center font-medium text-black transition duration-500 hover:bg-blue-500 hover:text-white"
          >
            GitHub Repository
          </a>

          <a
            href="https://huggingface.co/spaces/mohsinmalak12/sentiment-analysis-flask"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-blue-500 px-5 py-3 text-center font-medium text-blue-400 transition duration-500 hover:bg-blue-500 hover:text-white"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Map App */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <img
            src={map1}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={map2}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={map3}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={map4}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          Map App
        </h3>

        <p className="mt-4 text-gray-400">
          Location-based mobile application with maps and navigation.
        </p>

        <p className="mt-4 text-blue-400">
          React Native • Maps API • Expo Location
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/mohsinhayat11/MAPAPP"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-center font-medium text-black transition duration-500 hover:bg-blue-500 hover:text-white"
          >
            GitHub Repository
          </a>

          <button className="rounded-xl border border-gray-700 px-5 py-3 text-gray-300 transition duration-500 hover:border-blue-500 hover:text-white">
            Coming Soon
          </button>
        </div>
      </div>

      {/* WhatsApp Clone */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <img
            src={what1}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={what2}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
          <img
            src={what3}
            alt=""
            className="h-52 w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          WhatsApp Clone
        </h3>

        <p className="mt-4 text-gray-400">
          A messaging application inspired by WhatsApp with a modern
          chat interface and responsive design.
        </p>

        <p className="mt-4 text-blue-400">
          React Native • Expo • JavaScript
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/mohsinhayat11/whatsapp-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-center font-medium text-black transition duration-500 hover:bg-blue-500 hover:text-white"
          >
            GitHub Repository
          </a>

          <button className="rounded-xl border border-gray-700 px-5 py-3 text-gray-300 transition duration-500 hover:border-blue-500 hover:text-white">
            Coming Soon
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCards;