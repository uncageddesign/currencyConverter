import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      currency: "",
      newCurrency: "",
      convertedCurrency: "",
      euros: 0,
      currencyAmount: 0,
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
        const convertedCurrency = this.euros * this.rates;
        return convertedCurrency;
      },

      toEuros: function () {
        return this.currencyAmount/this.rates;
      }

    },
    mounted() {
      this.fetchCurrencyRates();
    }
  })
})
