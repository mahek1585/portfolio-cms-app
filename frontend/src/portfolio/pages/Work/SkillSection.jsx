// import React from 'react';
// import htmlIcon from "../../../assets/Images/html.png";
// import jsIcon from "../../../assets/Images/javascript.png";
// import reactIcon from "../../../assets/Images/react.png";
// import tailwindIcon from "../../../assets/Images/tailwindcss.png";



// const skills = [
//   {
//     image: htmlIcon,
//     title: "HTML & CSS",
//     description: "I structure and style responsive websites using clean and semantic HTML5 and modern CSS3."
//   },
//   {
//     image: jsIcon,
//     title: "JavaScript",
//     description: "I build dynamic, interactive websites using JavaScript, including DOM manipulation and API integration."
//   },
//   {
//     image: reactIcon,
//     title: "React.js",
//     description: "I create reusable components and responsive UIs using React with hooks and state management."
//   },
//   {
//     image: tailwindIcon,
//     title: "Tailwind CSS",
//     description: "I build sleek and responsive layouts efficiently using Tailwind's utility-first CSS framework."
//   }
// ];



// const SkillSection = () => {
//   return (
//     <section className="mx-auto px-6 sm:px-[4rem] py-12 min-h-[688px]">
//       <div className="flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[100px] sm:gap-y-16 sm:px-[140px]">
//         {skills.map((item, index) => (
//           <div key={index} className="w-[249px] h-[328px] flex flex-col items-center text-center">
//             <img src={item.image} alt={item.title} className="w-32 h-32 mx-auto" />
//             <h3 className="font-semibold leading-10 text-2xl text-[#2D2D2D] pt-[3.5rem]">{item.title}</h3>
//             <p className="text-[1rem] leading-[1.6rem] font-normal h-[81px] text-[#2D2D2D]">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillSection;


// import React from 'react';

// const SkillSection = ({ skillList }) => {
//   const skills = Array.isArray(skillList?.data) ? skillList.data : [];

//   return (
//     <section className="mx-auto px-6 sm:px-[4rem] py-12 min-h-[688px]">
//       <div className="flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[100px] sm:gap-y-16 sm:px-[140px]">
//         {skills.map((item) => (
//           <div key={item.id} className="w-[249px] h-[328px] flex flex-col items-center text-center">
//             <img src={item.img_url} alt={item.title} className="w-32 h-32 mx-auto" />
//             <h3 className="font-semibold leading-10 text-2xl text-[#2D2D2D] pt-[3.5rem]">
//               {item.title}
//             </h3>
//             {/* <p className="text-[1rem] leading-[1.6rem] font-normal h-[81px] text-[#2D2D2D]">
//               {item.description || "No description"}
//             </p> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillSection;










// import React from 'react';

// const SkillSection = ({ skillList }) => {
//   const skills = Array.isArray(skillList?.data) ? skillList.data : [];

//   return (
//     <section className="mx-auto px-6 sm:px-[4rem] py-16 bg-[#fdfdfd] min-h-[688px] ">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Technical Skills</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
//         {skills.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 text-center border border-gray-200"
//           >
//             <img
//               src={item.img_url}
//               alt={item.title}
//               className="w-24 h-24 object-contain mb-6"
//             />
//             <h3 className="text-xl font-semibold text-[#2D2D2D]">{item.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillSection;



import React from "react";
import { motion } from "framer-motion";

const SkillSection = ({ skillList }) => {
  // const skills = Array.isArray(skillList?.data) ? skillList.data : [];
  const skills = Array.isArray(skillList) ? skillList : [];

   console.log("Skills from API:", skills);
   console.log("SkillSection received:", skillList);
   


  return (
    <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          My Technical Skills
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          A quick overview of the tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center p-6 border border-gray-200"
          >
            
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              <img
                src={item.img_url}
                alt={item.title}
                className="w-16 h-16 object-contain"
                
              />
              
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
