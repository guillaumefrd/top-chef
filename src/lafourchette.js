var cheerio = require('cheerio');
var request = require('request');
var jsonfile = require('jsonfile');

var countFound = 0;

//search the restaurant in lafourchette and get the id
function getId(restaurants, idx) {
  return new Promise(function(resolve, reject){
    var restaurant = restaurants[idx];
    //normalize = remove the accents on the url
    var url = 'https://m.lafourchette.com/api/restaurant-prediction?name=' + restaurant.name.replace(/ /g, '_').replace(/&|°/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    console.log('[' + (idx+1) + '/' + restaurants.length + '] calling ', url);
    request({
      method: 'GET',
      url: url
    }, function(err, response, body){
      if(err){
        console.error(err);
        return reject(err);
      }

      var results = JSON.parse(body);
      results.forEach(function(restaurant_found){
        if(restaurant.address.postalCode == restaurant_found.address.postal_code){
          //we found the right restaurant
          restaurant.id = restaurant_found.id;
          restaurant.isFound = true;
          countFound++;
        }
      });

      setTimeout(function(){
        return resolve(restaurants)
      }, 0)
    });
  });
}

exports.searchAll = function(restaurants){
  restaurants.reduce(function(prev, elt, idx, array){
    return prev.then(function(restaurants){
      return getId(array, idx);
    })
  }, Promise.resolve([]))
  .then(function(restaurants){
    jsonfile.writeFile('output/3_restaurants_found_list.json', restaurants, {spaces: 2}, function(err){
      if(err){
        console.error(err);
      }
      console.log('***** json done *****');
      console.log();
      console.log('Found ' + countFound + ' restaurants on lafourchette.com (out of ' + restaurants.length + ').')
    })
  })
}
