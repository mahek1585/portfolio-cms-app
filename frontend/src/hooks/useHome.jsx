import React, { useEffect, useState } from "react";
import HomeService from "../services/Home.service";

const useHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skillList, setSkillList] = useState([]);
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Fetch skills safely
        const skillRes = await HomeService.getSkillList();
        const skills = skillRes?.data?.data || [];
        setSkillList(skills);
        console.log("✅ Skills fetched:", skills);

        // ✅ Try fetching works (only if endpoint exists)
        try {
          const workRes = await HomeService.getWorkList();
          const works = workRes?.data?.data || [];
          setWorkList(works);
          console.log("✅ Works fetched:", works);
        } catch (err) {
          console.warn("⚠️ Work API failed (skipping):", err.message);
        }

      } catch (err) {
        console.error("❌ Skill API failed:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { skillList, workList, isLoading };
};

export default useHome;



// import React, { useEffect, useState } from "react";
// import HomeService from "../services/Home.service";

// const useHome = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [skillList, setSkillList] = useState([]);

//   useEffect(() => {
//     HomeService.getSkillList()
//       .then((skillRes) => {
//         console.log("🎯 Skill API Response:", skillRes);
//         console.log("📦 Skill data field:", skillRes?.data?.data);

//         const data = skillRes?.data?.data || [];
//         setSkillList(data);
//         console.log("✅ setSkillList done:", data);
//       })
//       .catch((err) => {
//         console.error("❌ Skill API error:", err?.response?.data || err.message);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   return { skillList, isLoading };
// };

// export default useHome;


