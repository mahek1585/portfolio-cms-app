import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import data from "../../../utils/data.json";
import mahek2 from "../../../assets/Images/mahek2.png";


const HeroSection = () => {
  const { title, lead } = data.home.hero;
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
  <section className="mt-15 py-16 px-4 sm:px-10 md:px-24 flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between gap-10 sm:gap-8 md:gap-14 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden">
 
      {/* Left Image */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <div className="relative">
          <div className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[28rem] h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[28rem] rounded-full overflow-hidden border-4 border-transparent shadow-[0_0_30px_#0ff,0_0_60px_#f0f] hover:scale-105 transition-transform duration-500">

            <img
              src={mahek2}
              alt="Mahek Shaikh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-fuchsia-400 animate-pulse opacity-60"></div>
        </div>
      </div>

      {/* Right Text */}
      <div className="max-w-xl w-full sm:w-11/12 md:w-7/12 text-center md:text-left flex flex-col gap-4 sm:gap-3 md:gap-5">

        {/* Title */}
        <p className="text-cyan-300 text-base md:text-lg font-semibold tracking-wider">
          {title}
        </p>

        {/* Headline */}
         <h1 className="font-poppins font-extrabold text-[2rem] sm:text-[2.25rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-transparent bg-clip-text drop-shadow-lg">

          {data.home.hero.headline}
        </h1>

        {/* Animated Line */}
        <p className="text-[1.3rem] md:text-2xl font-semibold flex flex-wrap items-center gap-2">
          <span className="text-cyan-400">And I'm a</span>
          <span className="text-pink-400">
            <Typewriter
              words={["Web Developer", "Problem Solver","Software Developer", "Creative Thinker"]}
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
                : hoveredBtn === "resume"
                ? "bg-transparent border-2 border-white text-white"
                : "bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-white"
            }`}
          >
            Work
          </ScrollLink>

          {/* Resume Button */}
          <a
            href="/Mahek_Shaikh.pdf" 
            target="_blank"
            offset={-80}
                      duration={500}
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredBtn("resume")}
            onMouseLeave={() => setHoveredBtn(null)}
            className={`px-6 py-3 rounded-md cursor-pointer transition-transform font-medium text-center shadow-md ${
              hoveredBtn === "resume"
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-white scale-105 border-none"
                : "border-2 border-white text-white bg-transparent"
            }`}
                    >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
