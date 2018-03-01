# Web Scraping

All the scraping is done here. 

To rerun the scraping, just execute each index.js file with Node.js. 

### Michelin scrap

To get all the Michelin-starred restaurants in France. 

*You only need to rerun this scraping once a year. In fact, the starred restaurants won't change during the year.*

Run: 

`> node index.js` *> get the list of all the restaurants*

`> node index2.js` *> get the address of each restaurant*

### Lafourchette API

To get the current deals. 

Run:

`> node index3.js` *> search all the restaurants on LaFourchette*

`> node index4.js` *> get all the current deals of the restaurants on LaFourchette*

`> node index5.js` *> get all the images of the restaurants on LaFourchette*


## To Do 

Implement a bot that run the scraping automatically every day, to get the current deals.
