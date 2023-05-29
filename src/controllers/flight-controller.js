const { FlightService } = require("../services/index");

const flightService = new FlightService();
const { SuccessCodes } = require("../utils/error-codes");

const create = async (req, res) => {
	try {
		const flightRequestData = {
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			flightNumber: req.body.arrivalTime,
			flightNumber: req.body.departureTime,
			flightNumber: req.body.price,
		};

		const flight = await flightService.createFlight(flightRequestData);
		return res.status(SuccessCodes.CREATED).json({
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
		return res.status(SuccessCodes.OK).json({
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
