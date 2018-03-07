// Import Knex Configuration
const config = require('./knexfile.js')

// Create Knex object using configuration
const knex = require('knex')(config)
const newFamous = {
	'first_name' : process.argv[2],
	'last_name'  : process.argv[3],
	'birthdate'  : process.argv[4]
} 
knex('famous_people').insert(newFamous).asCallback(function(err,id){
	if(err){
		console.log(err);
		return
	}
	console.log('test',id)

});
