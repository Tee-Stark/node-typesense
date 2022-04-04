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
	try {
		const { q } = req.query
		// an object to hold the search parameters
		const searchObject = {
			'q': q,
			'query_by': 'producer',
			'sort_by': 'year:desc'
		}
		
		client.collections('cars')
			.documents()
			.search(searchObject)
			.then(results => {
			  res.status(200).json({
				message: 'success'
				data: results
			  })
			})
	} catch (err) {
		res.status(500).json(err)
	}
})
// a sample 'add to collection' route


const port = 3000

app.listen(port, () => {
	console.log(`App listening for requests on port ${port}...`)
})
