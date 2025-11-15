const supabase = require("../supabase");

/**
 * Get all timeline data
 */
const getTimeline = async (req, res) => {
  const { data, error } = await supabase
    .from("journey_timeline")
    .select("*")
    .order("display_order", { ascending: true });

  console.log("🧩 Timeline fetched from Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Timeline fetched successfully", data: data });
  }
};

/**
 * Get single timeline item by ID
 */
const getTimelineById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("journey_timeline")
    .select("*")
    .eq("id", id)
    .single();

  console.log("🧩 Timeline item fetched from Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Timeline item fetched successfully", data: data });
  }
};

/**
 * Create new timeline item
 */
const createTimeline = async (req, res) => {
  const {
    year,
    title,
    organization,
    description,
    skills,
    position,
    display_order,
  } = req.body;

  const { data, error } = await supabase
    .from("journey_timeline")
    .insert([
      {
        year,
        title,
        organization,
        description,
        skills: skills || [],
        position: position || "left",
        display_order: display_order || 0,
      },
    ])
    .select();

  console.log("🧩 Timeline item created in Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Timeline item created successfully", data: data[0] });
  }
};

/**
 * Update timeline item
 */
const updateTimeline = async (req, res) => {
  const { id } = req.params;
  const {
    year,
    title,
    organization,
    description,
    skills,
    position,
    display_order,
  } = req.body;

  const { data, error } = await supabase
    .from("journey_timeline")
    .update({
      year,
      title,
      organization,
      description,
      skills,
      position,
      display_order,
    })
    .eq("id", id)
    .select();

  console.log("🧩 Timeline item updated in Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Timeline item updated successfully", data: data[0] });
  }
};

/**
 * Delete timeline item
 */
const deleteTimeline = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("journey_timeline")
    .delete()
    .eq("id", id)
    .select();

  console.log("🧩 Timeline item deleted from Supabase:", data, error);

  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Timeline item deleted successfully" });
  }
};

module.exports = {
  getTimeline,
  getTimelineById,
  createTimeline,
  updateTimeline,
  deleteTimeline,
};