const { faker } = require('@faker-js/faker')
const client = require('./config.js')

// to generate dummy data for cars using faker
const generateCar = (type, collectionName) => {
	// to generate 5 cars
	for(let i = 0; i < 5; i++) {
		let car = {
			name: faker.vehicle.vehicle(),
			manufacturer: faker.vehicle.manufacturer(),
			color: faker.vehicle.color(),
			year: type === 'old' ? faker.date.between('1960-01-01T00:00:00.000Z', '2000-01-01T00:00:00.000Z').getFullYear() : faker.date.between('2000-01-01T00:00:00.000Z', '2025-01-01T00:00:00.000Z').getFullYear()
		}
		// add the generated car to the collection
		client.collections(collectionName)
		.documents()
		.create(car)
		.then(result => {
			// send a response containing the new car document created
			console.log(result)
		}, err => {
			console.error(err)
		})
	}
}

// to generte for old cars
generateCar('old', 'old_cars')
// to generate for new cars
generateCar('new', 'new_cars')

