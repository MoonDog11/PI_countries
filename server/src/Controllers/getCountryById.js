const { Country, TouristActivity } = require("../models/Country");

const getCountryById = async (req, res) => {
  const { idPais } = req.params;

  try {
    const country = await Country.findOne({
      where: { id: idPais },
      include: [{ model: TouristActivity }],
    });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getCountryById,
};
