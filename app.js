const express = require('express')
const client = require('./typesense/config')
const { createAlias } = require('./typesense/aliasHandler')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// create an alias 'cars' to point to the old_cars collection
await createAlias('cars', 'old_cars')

// a sample 'search collection' route
app.get('/search', async(req, res) => {
	const { q } = req.query
	
	const searchObject = {
		'q': q,
		'query_by': 'producer',
		'sort_by': 'year:desc'
	}
	
	client.collections('cars')
})
// a sample 'add to collection' route
