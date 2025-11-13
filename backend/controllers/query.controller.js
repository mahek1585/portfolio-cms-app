const supabase = require("../supabase");

const addQuery = async (req, res) => {
  const { email, name, message } = req.body;
  console.log("🟢 Received Query Request:", { email, name, message });

  const { data, error } = await supabase
    .from("queries")
    .insert([{ email, name, message }])
    .select()
    .single();

  console.log("🧩 Supabase Response:", { data, error });

  if (error) {
    console.error("❌ Supabase Insert Error:", error);
    return res.status(500).json({ message: error.message });
  }

  res.status(201).json(data);
};



module.exports = { addQuery };
