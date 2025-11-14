import React from "react";
import { motion } from "framer-motion";

const SkillSection = ({ skillList }) => {
  const skills = Array.isArray(skillList) ? skillList : [];

  console.log("Skills from API:", skills);
  console.log("SkillSection received:", skillList);

  return (
    <section className="py-20 px-6 md:px-24 bg-[#1e293b]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text tracking-tight">
          My Technical Skills
        </h2>
        <p className="text-[#cbd5e1] mt-4 max-w-xl mx-auto text-lg">
          A quick overview of the tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {skills.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0f172a] rounded-xl shadow-lg hover:shadow-[0_0_20px_#38bdf8] transition-all duration-300 flex flex-col items-center text-center p-6 border border-[#334155] hover:border-[#38bdf8] group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1e293b] rounded-full flex items-center justify-center mb-4 border-2 border-[#334155] group-hover:border-[#38bdf8] transition-all duration-300">
              <img
                src={item.img_url}
                alt={item.title}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors duration-300">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;