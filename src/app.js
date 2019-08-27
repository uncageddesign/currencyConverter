import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      newCurrency: "",  //for drop down
      euros: 0, //starting amount euros
      convertedCurrency: 0, //output of from euros
      notEuros: 0,  //starting amount random currency
      currencyAmount: 0,  //output of to euros
    },
    methods: {
      fetchCurrencyRates: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(response => {
          response.rates['EUR'] = 1;
          this.rates = response.rates;
        });
      },

      fromEuros: function (){
        this.convertedCurrency = (this.euros * this.rates[this.newCurrency]).toFixed(2);
        return this.convertedCurrency;
      },

      toEuros: function () {
        this.currencyAmount = (this.notEuros / this.rates[this.newCurrency]).toFixed(2);
        return this.currencyAmount;
      }

    },
    mounted() {
      this.fetchCurrencyRates();
    }
  })
})
