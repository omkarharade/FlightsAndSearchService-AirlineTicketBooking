const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
	constructor() {
		this.airplaneRepository = new AirplaneRepository();
		this.flightRepository = new FlightRepository();
	}
	async createFlight(data) {
		try {
			if (compareTime(data.arrivalTime, data.departureTime)) {
				throw { error: "Arrival Time cannot be less than Departure time" };
			}
			console.log(data.airplaneId);
			const airplane = await this.airplaneRepository.getAirplane(
				data.airplaneId
			);

			const flight = await this.flightRepository.createFlight({
				...data,
				totalSeats: airplane.capacity,
			});

			return flight;
		} catch (error) {
			console.log("Something went wrong in the Service Layer");
			throw { error };
		}
	}

	async getFlightData() {}
}

module.exports = FlightService;
