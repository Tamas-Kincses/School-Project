<template>
  <div class="modal fade" id="incomeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New Income</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="Expamount" class="col-form-label">Income amount:</label>
              <input type="number" v-model="NewIncomeData.amount" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="date" class="col-form-label">Type:</label>
              <select v-model="NewIncomeData.type">
                <option v-for="incomeType in incomeTypes" :value="incomeType" >{{ incomeType }}</option>
              </select>
            </div>
            <label for="Date" class="col-form-label">Date:</label>
            <input type="date" v-model="NewIncomeData.date" class="form-control" id="recipient-name">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  @click="createNewIncome">Add new income</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import budgetData from '../services/budget'
let incomeTypes = ref(["salary", "transfer", "bonus", "winning"])
let NewIncomeData=ref({
  amount:"",
  type:"",
  date:""
})
function createNewIncome() {
  console.log(NewIncomeData.value);
  budgetData.createIncome(NewIncomeData.value)
    .then(()=>{location.reload()})
    .catch(err => {
      console.log(err);
    })
}

</script>