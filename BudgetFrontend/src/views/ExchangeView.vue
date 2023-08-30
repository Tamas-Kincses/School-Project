<template>
  <div class="container text-center text-light">
    <div class="row align-items-start">
      <h3>Select the currency below, you would like to change!</h3>
      <div class="box">
        <select v-model="selectedCurrencyFrom">
          <option v-for="currency in currencies">{{ currency }} </option>
        </select>
        <div class="mb-3">
          <h1>Amount</h1>
          <input type="number" v-model="InputCurrencyAmount" class="form-control">
        </div>
      </div>
      <h3>Select the currency below, you would like to exchange into!</h3>
      <div class="box">
        <select v-model="selectedCurrencyTo">
          <option v-for="currency in currencies">{{ currency }} </option>
        </select>
        <div class="mb-3">
          <label class="form-label">Amount</label>
          <h3>{{ InputCurrencyAmount }} {{ selectedCurrencyFrom }} = {{ Math.round(OutputCurrencyAmount) }} {{ selectedCurrencyTo }}</h3>
        </div>
        <button class="btn btn-success" @click="Convert()">Show</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import exchangeData from '../services/exchangeData'
let selectedCurrencyTo = ref();
let selectedCurrencyFrom = ref();
let InputCurrencyAmount = ref(0);
let OutputCurrencyAmount = ref(0);

let data = ref([])

const currencies = ref([]);

exchangeData.getAllCurrencies()
    .then(resp => {
      currencies.value = resp.data;
      // console.log(currencies.value);
      // console.log(Object.keys(currencies.value.symbols));
      let data = Object.keys(currencies.value.symbols)
      currencies.value = data;
      
    })
    .catch(err => {
        console.log(err);
    })
    function Convert() {
      exchangeData.convertCurrencies(selectedCurrencyTo.value,selectedCurrencyFrom.value,InputCurrencyAmount.value)
          .then(resp => {
            data.value = resp.data
            console.log(data.value)
          OutputCurrencyAmount.value = data.value.result
            console.log(data.value.result)
          })
          .catch(err => {
            console.log(err);
          }) 
        }
</script>

<style>
.menu {
  display: inline;
  padding: 10px;
  text-align: center;
}

.box {
  margin-right: 10px;
}

.box select {
  background-color: rgb(80, 79, 79);;
  color: white;
  padding: 12px;
  width: 250px;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  /* -webkit-appearance: button; */
  appearance: button;
  outline: none;
}

.box::before {
  /* content: "\f13a"; */
  font-family: FontAwesome;
  position: absolute;
  width: 20%;
  border-radius: 5px;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}
</style>