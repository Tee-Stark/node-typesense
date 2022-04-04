const Typesense = require('typesense')


const tsClient = new Typesense.Client({
	nodes: [{
		host: process.env.HOST,
    	port: '443',
    	protocol: 'https'
	}],
	apiKey: process.env.API_KEY,
	connectionTimeoutSeconds: 10
})

module.exports = tsClient
