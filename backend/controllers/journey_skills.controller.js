const supabase = require("../supabase");

const getJourneySkills = async (req, res) => {
  const { data, error } = await supabase
    .from("journey_skills")
    .select("*")
    .order("display_order", { ascending: true });

  console.log("🧩 Journey Skills fetched from Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Journey skills fetched successfully", data: data });
  }
};

module.exports = { getJourneySkills };