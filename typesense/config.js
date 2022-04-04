const Typesense = require('typesense')


const tsClient = new Typesense.Client({
	nodes: [{
		host: '2kxvbfdiml0697ztp-1.a1.typesense.net',
    	port: '443',
    	protocol: 'https'
	}],
	apiKey: '67WJyBElQuNZAtFQbmncyBg3uCAboVVK',
	connectionTimeoutSeconds: 5
})

module.exports = tsClient
