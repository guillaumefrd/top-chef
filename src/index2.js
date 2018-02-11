var michelin = require('./michelin');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/1_restaurants_list.json', function(err, restaurants){
  //get the address of each restaurant and write a new JSON '2_restaurants_list.json'
  michelin.getAllAddresses(restaurants);
});
