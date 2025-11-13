import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import data from "../../../utils/data.json";

const HeroSection = () => {
  const { title, lead, img_url } = data.home.hero;
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="py-20 px-6 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-14 bg-gradient-to-br from-[#1e2746] via-[#192541] to-[#173d63] text-white overflow-hidden">
      
      {/* Left Image */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <div className="relative">
          <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-transparent shadow-[0_0_40px_#0ff,0_0_80px_#f0f] hover:scale-105 transition-transform duration-500">
            <img
              src={img_url}
              alt="Mahek Shaikh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-fuchsia-400 animate-pulse opacity-60"></div>
        </div>
      </div>

      {/* Right Text */}
      <div className="max-w-xl text-center md:text-left flex flex-col gap-5">
        {/* Title */}
        <p className="text-cyan-400 text-base md:text-lg font-semibold tracking-wider">
          {title}
        </p>

        {/* Headline */}
        <h1 className="font-poppins font-extrabold text-[2.5rem] md:text-[4.5rem] leading-tight tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-transparent bg-clip-text drop-shadow-lg">
          {data.home.hero.headline}
        </h1>

        {/* Animated Line */}
        <p className="text-[1.5rem] md:text-2xl font-semibold flex flex-wrap items-center gap-2">
          <span className="text-cyan-400">And I'm a</span>
          <span className="text-pink-400">
            <Typewriter
              words={["Web Developer", "Problem Solver", "Creative Thinker"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        {/* Lead */}
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {lead}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          {/* Work Button */}
          <ScrollLink
            to="work"
            smooth={true}
            offset={-80}
            duration={500}
            onMouseEnter={() => setHoveredBtn("work")}
            onMouseLeave={() => setHoveredBtn(null)}
            className={`px-6 py-3 rounded-md cursor-pointer transition-transform font-medium text-center shadow-lg ${
              hoveredBtn === "work"
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-white scale-105"
                : hoveredBtn === "contact"
                ? "bg-transparent border-2 border-white text-white"
                : "bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-white"
            }`}
          >
            Work
          </ScrollLink>

          {/* Contact Button */}
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            onMouseEnter={() => setHoveredBtn("contact")}
            onMouseLeave={() => setHoveredBtn(null)}
            className={`px-6 py-3 rounded-md cursor-pointer transition-transform font-medium text-center shadow-md ${
              hoveredBtn === "contact"
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-white scale-105 border-none"
                : "border-2 border-white text-white bg-transparent"
            }`}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
