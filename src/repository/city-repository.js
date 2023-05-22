const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
	async createCity({ name }) {
		try {
			const city = await City.create({ name });
			return city;
		} catch (error) {
			throw { error };
		}
	}

	async deleteCity(cityId) {
		try {
			await City.destroy({
				where: {
					id: cityId,
				},
			});
			return true;
		} catch (error) {
			throw { error };
		}
	}

	async updateCity(cityId, data) {
		try {
			const city = await City.update(data, {
				where: {
					id: cityId,
				},
			});

			return city;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}

	async getCity(cityId) {
		try {
			const city = await City.findByPk(cityId);
			return city;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}

	async getAllCities(filter) {
		try {
			if (filter.name) {
				console.log(filter.name);
				const cities = await City.findAll({
					where: {
						name: {
							[Op.startsWith]: filter.name,
						},
					},
				});
				console.log(cities);
				return cities;
			}

			const cities = await City.findAll();
			return cities;
		} catch (error) {
			console.log("something went wrong in repository layer");
			throw { error };
		}
	}
}

module.exports = CityRepository;
