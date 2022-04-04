const client = require('./config')

const oldCarsSchema = {
	'name': 'old_cars',  // collection name
	'fields': [
		{'name': 'name', 'type': 'string'}, // car name
		{'name': 'manufacturer', 'type': 'string', 'facet': true}, // car manufacturer
		{'name': 'color', 'type': 'string'}, // car color
		{'name': 'year', 'type': 'int64', 'facet': true}, // year of manufacturing
	],
}

client.collections().create(oldCarsSchema)
	.then( data => {
		console.log(data); // log collection creation output to the console
	})
	.catch( err => {
		console.error(err)
		throw new Error(err)
	})
	
const newCarsSchema = {
	'name': 'new_cars',  // collection name
	'fields': [
		{'name': 'name', 'type': 'string'}, // car name
		{'name': 'manufacturer', 'type': 'string', 'facet': true}, // car producer
		{'name': 'color', 'type': 'string'}, // car color
		{'name': 'year', 'type': 'int64', 'facet': true}, // year of manufacturing
	],
}

client.collections().create(newCarsSchema)
	.then( data => {
		console.log(data); // log collection creation output to the console
	})
	.catch( err => {
		console.error(err)
		throw new Error(err)
	})
