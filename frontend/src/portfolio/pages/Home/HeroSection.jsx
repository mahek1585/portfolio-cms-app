
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/Images/hero-image2.jpg";
import data from "../../../utils/data.json";

const HeroSection = () => {
  const { title, headline, lead } = data.home.hero;

  return (
    <section className="py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {/* Left Text Content */}
      <motion.div
        className="max-w-xl text-center md:text-left flex flex-col gap-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#009379] text-base md:text-lg font-semibold tracking-wider uppercase">
          {title}
        </p>

       <h1 className="font-poppins font-extrabold text-[2.5rem] md:text-[5rem] leading-tight tracking-wide bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 text-transparent bg-clip-text">
          {headline}
      </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {lead}
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shadow-2xl rounded-xl overflow-hidden"
      >
        <img
          src={HeroImage}
          alt="Web developer"
          className="w-[20rem] md:w-[28rem] object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
