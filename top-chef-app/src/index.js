import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var restos = [
  {
    "name": "Le 39V",
    "category": "Cuisine Moderne, Créative, Traditionnel, Classique, Gastronomique",
    "urls": {
      "michelin": "https://restaurant.michelin.fr/2fd19do/le-39v-paris-08",
      "lafourchette": "https://www.lafourchette.com/restaurant/Le-39V-Paris-Frédéric-Vardon/26112"
    },
    "stars": 1,
    "address": {
      "street": "39 Avenue George V",
      "postalCode": "75008",
      "city": "Paris 08"
    },
    "id": "26112",
    "isFound": true,
    "promotions": [
      {
        "title": "Menu Saint-Valentin avec une coupe de Champagne Lenoble 245,00 €",
        "exclusions": "Price per person. Drinks not included.  14/02 diner.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu Saint-Valentin avec accords mets et vins 340,00 €",
        "exclusions": "Price per person. Drinks included.  14/02 diner.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu tout Champagne 'Amour de Deutz' 2008 315,00 €",
        "exclusions": "Price per person. Drinks included.  14/02 diner.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu Mardis Gourmands 135€ le soir",
        "exclusions": "Price per person.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu Mardis Gourmands 85€ le midi",
        "exclusions": "Price per person.",
        "is_menu": true,
        "is_special_offer": false
      }
    ],
    "image_url": "https://u.tfstatic.com/restaurant_photos/112/26112/169/664/39-v-frederic-vardon-vue-panoramique-de-la-terrasse-ccc6a.jpg"
  },
  {
    "name": "Agapé",
    "category": "Cuisine Moderne, Créative, Gastronomique",
    "urls": {
      "michelin": "https://restaurant.michelin.fr/2eo1t6h/agape-paris-17",
      "lafourchette": "https://www.lafourchette.com/restaurant/Agapé/1923"
    },
    "stars": 1,
    "address": {
      "street": "51 rue Jouffroy-d'Abbans",
      "postalCode": "75017",
      "city": "Paris 17"
    },
    "id": "1923",
    "isFound": true,
    "promotions": [
      {
        "title": "Menu Prestige 72€",
        "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "€250.00 Valentine's Day set menu",
        "exclusions": "Price per person. Drinks not included.  14/02 diner.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu Gourmands 185€",
        "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
        "is_menu": true,
        "is_special_offer": false
      }
    ],
    "image_url": "https://u.tfstatic.com/restaurant_photos/923/1923/169/664/agape-l-interieur-97075.jpg"
  },
  {
    "name": "Le Restaurant",
    "category": "Cuisine Moderne, Créative, Gastronomique",
    "urls": {
      "michelin": "https://restaurant.michelin.fr/2cfem9h/le-restaurant-paris-06",
      "lafourchette": "https://www.lafourchette.com/restaurant/Leroy's-Restaurant/297223"
    },
    "stars": 1,
    "address": {
      "street": "13 rue des Beaux-Arts",
      "postalCode": "75006",
      "city": "Paris 06"
    },
    "id": "297223",
    "isFound": true,
    "promotions": [
      {
        "title": "-30% off the \"à la carte\" menu!",
        "exclusions": "Set menus and drinks not included",
        "is_menu": false,
        "is_special_offer": true
      },
      {
        "title": "Brunch 35€",
        "is_menu": true,
        "is_special_offer": false
      }
    ],
    "image_url": "https://u.tfstatic.com/restaurant_photos/223/297223/169/664/leroy-s-restaurant-leroy-s-bar-restaurant-rez-de-chaussee-06a55.jpg"
  },
  {
    "name": "Numéro 3",
    "category": "Cuisine Moderne, Créative, Gastronomique",
    "urls": {
      "michelin": "https://restaurant.michelin.fr/2dnmje9/numero-3-le-tremblay-sur-mauldre",
      "lafourchette": "https://www.lafourchette.com/restaurant/Restaurant-Numéro-3/26601"
    },
    "stars": 1,
    "address": {
      "street": "3 rue du Général de Gaulle",
      "postalCode": "78490",
      "city": "Le Tremblay-sur-Mauldre"
    },
    "id": "26601",
    "isFound": true,
    "promotions": [
      {
        "title": "Menu 125€",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu 85€",
        "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu 65€",
        "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
        "is_menu": true,
        "is_special_offer": false
      },
      {
        "title": "Menu  49€",
        "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
        "is_menu": true,
        "is_special_offer": false
      }
    ],
    "image_url": "https://u.tfstatic.com/restaurant_photos/601/26601/169/664/0b0ba1fad99f909c7ea767198c2ec778.jpg"
  },
  {
    "name": "Paloma",
    "category": "Cuisine Moderne, Créative, Gastronomique, Traditionnel, Classique",
    "urls": {
      "michelin": "https://restaurant.michelin.fr/280mq6yn/paloma-mougins",
      "lafourchette": "https://www.lafourchette.com/restaurant/Paloma/38822"
    },
    "stars": 2,
    "address": {
      "street": "47 Avenue du Moulin de la Croix",
      "postalCode": "06250",
      "city": "Mougins"
    },
    "id": "38822",
    "isFound": true,
    "promotions": [
      {
        "title": "€180.00 Valentine's Day set menu",
        "exclusions": "Price per person. Drinks not included.  14/02 lunch and diner.",
        "is_menu": true,
        "is_special_offer": false
      }
    ],
    "image_url": "https://u.tfstatic.com/restaurant_photos/822/38822/169/664/paloma-restaurant-05449.jpg"
  }
];


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: restos,
    }
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
      <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--8dp">
        <figure class="mdl-card__media">
          <img src={restaurant.image_url} alt=""/>
        </figure>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{restaurant.name}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {this.renderPromotions(restaurant.promotions)}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href={restaurant.urls.lafourchette}>More informations</a>
          <div class="mdl-layout-spacer"></div>
          <button class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">favorite</i></button>
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
      <div class="mdl-grid">
        {tab}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Grid />,
  document.getElementById('grid-cards')
);
