const { TouristActivity } = require("../models/Activity");

const getActivities = async (req, res) => {
  try {
    const activities = await TouristActivity.findAll();

    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getActivities,
};
