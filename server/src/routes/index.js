const express = require("express");
const router = express.Router();
const countryController = require("../Controllers/getCountries");
const { getCountryById } = require("../Controllers/getCountryById");
const { getActivities } = require("../Controllers/getActivities");
const { getCountriesByName } = require("../Controllers/getCountriesByName");

router.get("/countries/:idPais", getCountryById);
router.get("/countries", countryController.getAllCountries);
router.get("/activities", getActivities);
router.get("/countries/name", getCountriesByName);

module.exports = router;
