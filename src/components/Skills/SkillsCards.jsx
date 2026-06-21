import { motion } from "framer-motion";

function SkillBar({ name, percentage }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-300">{name}</span>
        <span className="text-blue-400">{percentage}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        />
      </div>
    </div>
  );
}

function SkillsCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid gap-6 md:grid-cols-2"
    >
      {/* Frontend */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Frontend
        </h3>

        <div className="space-y-5">
          <SkillBar name="HTML" percentage={95} />
          <SkillBar name="CSS" percentage={90} />
          <SkillBar name="JavaScript" percentage={85} />
          <SkillBar name="React" percentage={80} />
          <SkillBar name="Tailwind CSS" percentage={90} />
        </div>
      </div>

      {/* Backend */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Backend
        </h3>

        <div className="space-y-5">
          <SkillBar name="Node.js" percentage={75} />
          <SkillBar name="Express.js" percentage={70} />
        </div>
      </div>

      {/* Programming */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Programming
        </h3>

        <div className="space-y-5">
          <SkillBar name="Python" percentage={85} />
          <SkillBar name="C++" percentage={75} />
          <SkillBar name="Java" percentage={70} />
        </div>
      </div>

      {/* Database */}
      <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Database
        </h3>

        <div className="space-y-5">
          <SkillBar name="MongoDB" percentage={75} />
          <SkillBar name="MySQL" percentage={80} />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsCards;