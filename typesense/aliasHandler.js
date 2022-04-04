const client = require('./config')

exports.createAlias = async (alias, realCollection) => {
	const aliasedCollection = {
	 'collection_name': realCollection
	}
	// create/update the alias passed as realCollection
	const aliased = await client.aliases().upsert(alias, aliasedCollection)
	console.log(aliased) // log alias creation response to console
}
