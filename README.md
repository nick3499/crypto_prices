# crypto_prices_cc_api

Web app which displays current prices of 8 cryptos converted to 4 major currencies. See [CryptoCompare.com API](https://www.cryptocompare.com/api/).

![crypto]

 - [cryptocompare.com API](https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XMR,DASH,NEO,ZEC&tsyms=USD,EUR,GBP)

### Updating Prices

To update prices, refresh the browser display.

### Components

 - `styles/styles.js` modifies [Foundation CSS](https://foundation.zurb.com/sites/docs/v/5.5.3/css.html)' default card styles, found in the cards container.
 - `script.js` contains the `data` object which will list pulled `results`, found in the `Vue` object. Along with `axios` logic for getting the [API](https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD), found in the `mounted()` function.
 - `index.html`: `<div class="container" id="app">` couples content with data. [Vue.js](https://vuejs.org/) Template syntax can be seen in `<p>&euro; {{ result.EUR }}</p>`.
 
### Additional Libraries

The following libraries are linked to the app:

 - [foundation.min.css](https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css)
 - [vue.min.js](https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js)
 - [axios.min.js](https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js)

### Related Tutorial

- [How to Use Vue.js and Axios to Display Data from an API](https://www.digitalocean.com/community/tutorials/how-to-use-vue-js-and-axios-to-display-data-from-an-api)

[crypto]: crypto-prices.png "crypto_prices"
