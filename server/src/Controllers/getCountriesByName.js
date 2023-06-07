const { Country } = require("../models/Country");

const getCountriesByName = async (req, res) => {
  const { name } = req.query;

  try {
    const countries = await Country.findAll({
      where: {
        name: { $iLike: `%${name}%` },
      },
    });

    if (countries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }

    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCountriesByName };
