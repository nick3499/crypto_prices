const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XMR,DASH,NEO,ZEC&tsyms=USD,EUR,GBP,JPY"

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data
    })
  }
});
