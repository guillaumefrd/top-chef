var cheerio = require('cheerio');
var request = require('request');
var jsonfile = require('jsonfile');

//urls of the pages to scrap
var pagesToScrap = [];
var baseUrl =  "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"
for(var i=1; i<=34; i++){
  pagesToScrap.push(baseUrl+i.toString());
}

function scrapPage(url, result) {
  return new Promise(function(resolve, reject){
    console.log('calling ', url);
    request({
      method: 'GET',
      url: url
    }, function(err, response, body){
      if(err){
        console.error(err);
        return reject(err);
      }

      $ = cheerio.load(body);
      var countRestaurants = 0;

      $('.ds-1col.node.node--poi.view-mode-poi_card.node--poi-card').each(function(){
        var currentRestaurant = {
          name: $('.poi_card-display-title', this).text().trim(),
          category: $('.poi_card-display-cuisines', this).text().replace(/;/g,',').trim(),
          url: 'https://restaurant.michelin.fr' + $('a', this).attr('href')
        };
        result.push(currentRestaurant);
        countRestaurants++;
      });

      console.log(countRestaurants + " restaurants on this page");
      console.log('-----------------------');

      setTimeout(function(){
        return resolve(result);
      }, 400);
    });
  });
}

pagesToScrap.reduce(function(prev, elt, idx, array){
  return prev.then(function(results){
    return scrapPage(elt, results)
  })
}, Promise.resolve([]))
.then(function(results){
  jsonfile.writeFile('restaurants_list.json', results, {spaces: 2}, function(err){
    if(err){
      console.error(err);
    }
    console.log('***--> json done <--***');
    console.log("Total number of restaurants: " + results.length);
  });
});
