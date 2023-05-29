const { Airport } = require("../models/index");
const { Op } = require("sequelize");

class AirportRepository {
	async createAirport(airportData) {
		try {
			const airport = await Airport.create(airportData);
			return airport;
		} catch (error) {
			throw { error };
		}
	}

	async createAirports(airportsNames) {
		try {
			const airports = await Airport.bulkCreate(airportsNames);
			return airports;
		} catch (error) {
			throw { error };
		}
	}

	async deleteAirport(airportId) {
		try {
			await Airport.destroy({
				where: {
					id: airportId,
				},
			});
			return true;
		} catch (error) {
			throw { error };
		}
	}

	async updateAirport(airportId, data) {
		try {
			const airport = await Airport.update(data, {
				where: {
					id: airportId,
				},
			});

			return airport;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}

	async getAirport(airportId) {
		try {
			const airport = await Airport.findByPk(airportId);
			return airport;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}

	async getAllAirports(filter) {
		try {
			if (filter.name) {
				console.log(filter.name);
				const airports = await Airport.findAll({
					where: {
						name: {
							[Op.startsWith]: filter.name,
						},
					},
				});
				console.log(airports);
				return airports;
			}
			console.log("in airport repository");
			const airports = await Airport.findAll();
			console.log(airports);
			return airports;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}
}

module.exports = AirportRepository;
