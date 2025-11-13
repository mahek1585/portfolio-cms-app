// import React from "react";

// const Logo = ({ skillList }) => {
//   console.log("Skill List:", skillList);

//   const skills = Array.isArray(skillList?.data)
//     ? skillList.data.map((skill) => (
//         <img
//           key={skill.id}
//           src={skill.img_url}
//           alt={skill.title}
//            onError={(e) => (e.target.src = "fallback-image-url.jpg")}
//           className="h-24 w-auto border border-green-400"
//         />
//       ))
//     : <p className="text-red-500">No skills found</p>;

//   return (
//     <div className="w-full flex justify-center py-14">
//       <div className="hidden md:flex w-[80rem] justify-center gap-12 items-center border-y-2 border-[#000000] py-14 px-10">
//         {skills}
//       </div>

//       <div className="md:hidden grid grid-cols-2 gap-y-14 gap-x-14 justify-items-center w-full max-w-xs border-y-2 border-[#000000]">
//         <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_92x30dp.png" alt="google" className="h-[2rem] w-auto pt-2" />
//         {/* your icons go here */}
//       </div>
//     </div>
//   );
// };

// export default Logo;






