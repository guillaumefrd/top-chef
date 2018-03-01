import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.props.restaurants
    }
  }

  favorite(id) {
    document.getElementById(id).getElementsByClassName('material-icons')[0].style.color = "#ff0000";
  }

  title(restaurant) {
    var res = restaurant.name;
    for(var i=0; i<restaurant.stars; i++){
      res += " *";
    }
    return res;
  }

  city(cityName) {
    return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase().replace(/\d/g,'')
  }

  renderPromotions(promotions) {
    var res = [];
    promotions.forEach(function(promo){
      res.push(React.createElement('p', null, promo.title))
    });
    return res;
  }

  renderCard(restaurant) {
    return (
      <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--8dp" id={restaurant.id}>
        <figure class="mdl-card__media">
          <img src={restaurant.image_url} alt=""/>
        </figure>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{this.title(restaurant)}</h2>
        </div>
        <div class="mdl-card__supporting-text bold">
          {this.city(restaurant.address.city)}
        </div>
        <div class="mdl-card__supporting-text">
          {this.renderPromotions(restaurant.promotions)}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href={restaurant.urls.lafourchette}>More informations</a>
          <div class="mdl-layout-spacer"></div>
          <button class="mdl-button mdl-button--icon mdl-button--colored" onClick={() => this.favorite(restaurant.id)}><i class="material-icons">favorite</i></button>
          <button class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">share</i></button>
        </div>
      </div>
    );
  }

  render() {
    var tab = [];
    var parentThis = this;
    this.state.restaurants.forEach(function(restaurant){
      tab.push(parentThis.renderCard(restaurant));
    });

    return (
      <div>
        <div class="col-lg-12 text-center">
          <h3 class="section-subheading">{this.state.restaurants.length} deals found</h3>
        </div>
        <div class="mdl-grid">
          {tab}
        </div>
      </div>
    );
  }
}

class FormControl extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      restaurants: this.props.restaurants
    }
  }

  handleChange(e) {
    var newElement = document.createElement('div');
    newElement.setAttribute('id', 'temp');

    if(e.target.value != 'All'){
      getRestaurantsWithSpecialOfferFilterByStars(this.state.restaurants, e.target.value)
      .then(function(restaurants_new){

        if(restaurants_new.length === 0){
          var row = document.createElement('div');
          row.setAttribute('class', 'row');
          newElement.appendChild(row);

          var col = document.createElement('div');
          col.setAttribute('class', 'col-lg-12 text-center');
          row.appendChild(col);

          var h3 = document.createElement('h3');
          h3.setAttribute('class', 'section-subheading');
          var content = document.createTextNode("Sorry, we didn't find any deal with this filter");
          h3.appendChild(content);
          col.appendChild(h3);

        } else {
          ReactDOM.render(
            <Grid restaurants={restaurants_new}/>,
            newElement
          )
        }
      })
    } else {
      ReactDOM.render(
        <Grid restaurants={this.state.restaurants}/>,
        newElement
      )
    }
    var oldElement = document.getElementById('grid-cards');
    var parentDiv = oldElement.parentNode;
    parentDiv.replaceChild(newElement, oldElement);
    newElement.setAttribute('id', 'grid-cards');
  }

  render() {
    return (
      <div class="row">
        <div class="col-sm">
          <div class="col-6">
            <form>
              <div class="form-group">
                <label for="starsFormControl">Filter by Michelin-Stars</label>
                <select class="form-control" id="starsFormControl" onChange={this.handleChange}>
                  <option>All</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm text-right">
          <div class="col-12">
            <h3 class="section-subheading">Last update on deals: 01/03/2018</h3>
          </div>
        </div>
      </div>
    );
  }
}



// ========================================

function getRestaurantsWithSpecialOffer(restaurants){
  var restaurants_with_deals = [];
  for(var i in restaurants){
    // get only the restaurants with special promotions
    if ('promotions' in restaurants[i] && restaurants[i].promotions.length > 0){
      var promotions_with_special_offer = [];
      for(var j in restaurants[i].promotions){
        if (restaurants[i].promotions[j].is_special_offer === true){
          promotions_with_special_offer.push(restaurants[i].promotions[j]);
        }
      }
      if(promotions_with_special_offer.length > 0) {
        restaurants[i].promotions = promotions_with_special_offer;
        restaurants_with_deals.push(restaurants[i]);
      }
    }
  }
  return restaurants_with_deals;
}

function getRestaurantsWithSpecialOfferFilterByStars(restaurants, stars){
  return new Promise(function(resolve, reject){
    var restaurants_with_deals = [];
    for(var i in restaurants){
      // get only the restaurants with special promotions
      if ('promotions' in restaurants[i] && restaurants[i].promotions.length > 0){
        var promotions_with_special_offer = [];
        for(var j in restaurants[i].promotions){
          if (restaurants[i].promotions[j].is_special_offer === true){
            promotions_with_special_offer.push(restaurants[i].promotions[j]);
          }
        }
        if(promotions_with_special_offer.length > 0 && restaurants[i].stars == stars) {
          restaurants[i].promotions = promotions_with_special_offer;
          restaurants_with_deals.push(restaurants[i]);
        }
      }
    }
    return resolve(restaurants_with_deals);
  })
}

// get all the restaurants
fetch('src/5_final_restaurants_list.json')
  .then(function(restaurants){
    restaurants = restaurants.json();
    return restaurants;
  })
  .then(function(restaurants){
    var restaurants_with_deals = getRestaurantsWithSpecialOffer(restaurants);

    ReactDOM.render(
      <FormControl restaurants={restaurants_with_deals}/>, document.getElementById('filter')
    )
    ReactDOM.render(
      <Grid restaurants={restaurants_with_deals}/>,
      document.getElementById('grid-cards')
    )
  })
