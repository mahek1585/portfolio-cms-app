import React from "react";
import useProfile from "../../../hooks/useProfile";

const AboutHeader = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-24 text-center bg-[#0f172a] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#38bdf8] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-[#cbd5e1]">Loading profile...</p>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="py-20 px-6 md:px-24 text-center bg-[#0f172a] min-h-screen flex items-center justify-center">
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-8 max-w-md">
          <svg className="w-16 h-16 mx-auto mb-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-[#38bdf8] text-lg font-semibold">Failed to load profile data.</p>
          <p className="text-[#94a3b8] text-sm mt-2">Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-20 px-6 md:px-24 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative group">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_40px_#38bdf8] border-4 border-[#38bdf8] group-hover:scale-105 transition-transform duration-500">
              <img
                src={profile.img_url}
                className="w-full h-full object-cover"
                alt={profile.role || "Profile"}
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-[#818cf8] animate-pulse opacity-40"></div>
          </div>
          
          <h2 className="mt-6 text-3xl font-bold text-white">Mahek Shaikh</h2>
          <p className="text-[#38bdf8] font-semibold mt-2 text-lg">
            {profile.role || "Web Developer"}
          </p>
        </div>

        {/* Bio */}
        <div className="text-[#cbd5e1] max-w-2xl ml-7">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text">
            About Me
          </h3>
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;