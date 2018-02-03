var cheerio = require('cheerio');
var request = require('request');
var jsonfile = require('jsonfile');

var countFound = 0;

function search(restaurants, idx) {
  return new Promise(function(resolve, reject){
    var restaurant = restaurants[idx];
    //remove the accents on the url -> fixed some errors
    var url = 'https://www.lafourchette.com/search-refine/' + restaurant.name.replace(/ /g, '%20').normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log('[' + (idx+1) + '/' + restaurants.length + '] calling ', url);
    request({
      method: 'GET',
      url: url
    }, function(err, response, body) {
      if (err) {
        console.error(err);
        return reject(err);
      }

      $ = cheerio.load(body);

      //if the restaurant is found on lafourchette
      if ($('#results').hasClass('resultContainer')) {
        console.log("found: " + restaurant.name);
        restaurant.found = true;
        restaurant.urls.lafourchette = 'https://www.lafourchette.com' + $('a', '.resultItem-name').attr('href');
        restaurant.address = $('.resultItem-address').first().text().trim()
        countFound++;
      } else {
        console.log("not found: " + restaurant.name);
        restaurant.found = false;
      }

      setTimeout(function(){
        return resolve(restaurants)
      }, 0)
    });
  });
}

exports.searchAll = function(restaurants){
  restaurants.reduce(function(prev, elt, idx, array){
    return prev.then(function(restaurants){
      return search(array, idx);
    })
  }, Promise.resolve([]))
  .then(function(restaurants){
    jsonfile.writeFile('restaurants_found_list.json', restaurants, {spaces: 2}, function(err){
      if(err){
        console.error(err);
      }
      console.log('***** json done *****');
      console.log();
      console.log('Found ' + countFound + ' restaurants on lafourchette.com (out of ' + restaurants.length + ').')
    })
  })
}
