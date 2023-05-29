const express = require("express");
const {
	CityController,
	AirportController,
	FlightController,
} = require("../../controllers/index");
const router = express.Router();

// CRUD for City Model

router.post("/city", CityController.create);
router.post("/cities", CityController.createAll);
router.delete("/city/:id", CityController.destroy);
router.get("/city", CityController.getAll);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);

// CRUD for Airports

router.post("/airport", AirportController.create);
router.post("/airports", AirportController.createAll);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport", AirportController.getAll);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);

router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);
module.exports = router;
