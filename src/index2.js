var lafourchette = require('./lafourchette');
var jsonfile = require('jsonfile');

jsonfile.readFile('restaurants_list.json', function(err, restaurants){
  lafourchette.searchAll(restaurants);
});
