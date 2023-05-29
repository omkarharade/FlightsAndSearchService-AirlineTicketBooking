const { AirportService } = require("../services/index");
const airportService = new AirportService();

const create = async (req, res) => {
	try {
		console.log(req.body);
		const airport = await airportService.createAirport(req.body);
		return res.status(201).json({
			data: airport,
			success: true,
			message: "successfully created a airport",
			err: {},
			misc: {
				contributor: "omkar",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to create a airport",
			err: error,
		});
	}
};

const createAll = async (req, res) => {
	try {
		const airportArray = req.body;
		const airports = await airportService.createAirports(airportArray);
		console.log(airportArray);
		return res.status(201).json({
			data: airports,
			success: true,
			message: "successfully created multiple airports",
			err: {},
			misc: {
				contributor: "omkar",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to create multiple airports",
			err: error,
		});
	}
};

const destroy = async (req, res) => {
	try {
		const response = await airportService.deleteAirport(req.params.id);
		return res.status(200).json({
			data: response,
			success: true,
			message: "successfully deleted a airport",
			err: {},
			misc: {
				contributor: "omkar",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to delete a airport",
			err: error,
		});
	}
};

const update = async (req, res) => {
	try {
		const response = await airportService.updateAirport(
			req.params.id,
			req.body
		);
		return res.status(200).json({
			data: response,
			success: true,
			message: "successfully updated an airport",
			err: {},
			misc: {
				contributor: "omkar",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to update an airport",
			err: error,
		});
	}
};

const get = async (req, res) => {
	try {
		const response = await airportService.getAirport(req.params.id);
		console.log(response);
		return res.status(201).json({
			data: response,
			success: true,
			message: "successfully fetched an airport",
			err: {},
			misc: {
				contributor: "omkar",
				tester: "Omega",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to get the airport",
			err: error,
		});
	}
};

const getAll = async (req, res) => {
	try {
		console.log(req.query);
		const airports = await airportService.getAllAirports(req.query);
		return res.status(200).json({
			data: airports,
			success: true,
			message: "successfully fetched all airports",
			err: {},
			misc: {
				contributor: "omkar",
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to fetch all airports",
			err: error,
		});
	}
};

module.exports = {
	create,
	createAll,
	destroy,
	update,
	get,
	getAll,
};
