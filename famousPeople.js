module.exports = function (client){

	const fPeople = function(name, callback) {
  const query ="SELECT * from famous_people WHERE last_name = $1";
  client.query(query, [name], callback );
}
return {
	fPeople
}


}