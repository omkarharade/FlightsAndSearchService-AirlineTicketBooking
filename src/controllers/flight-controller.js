const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
	try {
		console.log(req.body);
		const flight = await flightService.createFlight(req.body);
		return res.status(201).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully created a flight",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to create a flight",
			err: error,
		});
	}
};

const getAll = async (req, res) => {
	try {
		const response = await flightService.getAllFlightData(req.body);
		return res.status(201).json({
			data: response,
			success: true,
			err: {},
			message: "Successfully fetched all flights",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to fetch flights",
			err: error,
		});
	}
};
module.exports = {
	create,
	getAll,
};
