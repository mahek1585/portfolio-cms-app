const supabase = require("../supabase");

const getProfileData = async (req, res) => {
  const { data, error } = await supabase.from("profile").select("*").single();
  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Profile Data Fetched", data: data });
  }

// const response = await supabase.from("profile").select("*");
// console.log({response});
// res.json({message : "profile data fetched"});




};

module.exports = {
  getProfileData,
};


