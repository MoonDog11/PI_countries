const { Country } = require("../models/Country");

const countryController = {
  getAllCountries: async (req, res) => {
    try {
      const countries = await Country.findAll();
      res.json(countries);
    } catch (error) {
      console.error("Error retrieving countries:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = countryController;
