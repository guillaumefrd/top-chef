var michelin = require('./michelin');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/1_restaurants_list.json', function(err, restaurants){
  michelin.getAllAddresses(restaurants);
});
