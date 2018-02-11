var lafourchette = require('./lafourchette');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/3_restaurants_found_list.json', function(err, restaurants){
  //get all the current deals of the restaurants on LaFourchette and write a new JSON '4_restaurants_promotions_list.json'
  lafourchette.getAllDeals(restaurants);
});
