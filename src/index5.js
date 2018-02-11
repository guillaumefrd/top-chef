var lafourchette = require('./lafourchette');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/4_restaurants_promotions_list.json', function(err, restaurants){
  //get all the images of the restaurants on LaFourchette and write a new JSON '5_final_restaurants_list.json'
  lafourchette.getAllImages(restaurants);
});
