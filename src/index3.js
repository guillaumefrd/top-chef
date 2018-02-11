var lafourchette = require('./lafourchette');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/2_restaurants_list.json', function(err, restaurants){
  //search all the restaurants on LaFourchette and write a new JSON '3_restaurants_found_list.json'
  lafourchette.searchAll(restaurants);
});
