var lafourchette = require('./lafourchette');
var jsonfile = require('jsonfile');

jsonfile.readFile('output/restaurants_list.json', function(err, restaurants){
  lafourchette.searchAll(restaurants);
});
