import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      currency: "",
      newCurrency: "",
      convertedCurrency: "",
      currencyAmount: 0
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

      fromEuros(){
        return this.currencyAmount * this.rates[this.newCurrency];
      },

      toEuros(){
        return this.currencyAmount/this.rates[this.newCurrency];
      }

    },
    mounted() {
      this.fetchCurrencyRates();
    }
  })
})
