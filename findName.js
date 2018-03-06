const pg = require("pg");
const settings = require("./settings"); 
const client = new pg.Client(settings);
const famousPeople = require('./famousPeople')(client);


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  famousPeople.fPeople(process.argv[2], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    const rows = result.rows;
    console.log(`Found ${rows.length} person(s) by name ${process.argv[2]}:`);
 	console.log	(`${rows.length}: ${rows.first_name} ${rows.last_name} born ${rows.birthdate}`);
    client.end();
  });
});