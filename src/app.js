import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      newCurrency: "",
      convertedCurrency: "",
      euros: 0,
      notEuros: 0,
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
        this.convertedCurrency = this.euros * this.rates[0];
        return this.convertedCurrency;
      },

      toEuros: function () {
        this.notEuros = this.currencyAmount / this.rates;
        return this.notEuros;
      }

    },
    mounted() {
      this.fetchCurrencyRates();
    }
  })
})
