import React from "react";

const SplashScreen = ({ splashLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-700 ${
        splashLoading ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      }`}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      </div>

      {/* Logo/Initial Circle */}
      <div className="relative z-10 mb-8">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#38bdf8] border-r-[#0ea5e9] animate-spin"></div>
          
          {/* Inner Circle */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] rounded-full flex items-center justify-center shadow-2xl shadow-[#38bdf8]/50">
            <span className="text-3xl font-bold text-[#0f172a]">M</span>
          </div>
        </div>
      </div>

      {/* Animated Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#38bdf8] via-white to-[#0ea5e9] bg-clip-text text-transparent animate-fade-in">
          Mahek Shaikh
        </h1>
        <p className="text-lg text-gray-400 animate-fade-in [animation-delay:0.3s]">
          Full Stack Developer
        </p>
      </div>

      {/* Animated Progress Dots */}
      <div className="flex gap-2 mt-8 relative z-10">
        <div className="w-2 h-2 bg-[#38bdf8] rounded-full animate-ping"></div>
        <div className="w-2 h-2 bg-[#38bdf8] rounded-full animate-ping [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-[#38bdf8] rounded-full animate-ping [animation-delay:0.4s]"></div>
      </div>

      {/* Bottom Text */}
      <p className="absolute bottom-12 text-sm text-gray-500 animate-fade-in [animation-delay:0.6s]">
        Loading experience...
      </p>
    </div>
  );
};

export default SplashScreen;