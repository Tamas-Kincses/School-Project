<template>
  <div class="modal fade" id="EditExpenseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Expense</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="Expamount" class="col-form-label">Expense amount:</label>
              <input type="number" v-model="EditExpenseData.amount" class="form-control" id="recipient-name">
            </div>
            <label for="Date" class="col-form-label">Date:</label>
            <input type="date" v-model="EditExpenseData.date" class="form-control" id="recipient-name">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="EditExpense">Edit Expense</button>
          <button type="button" @click="test()" class="btn btn-secondary">TEST</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
let expenseTypes = ref([])
const props = defineProps(['ExpenseId']);
let EditExpenseData = ref({
  amount: "",
  date: ""
})
let ExpenseId=ref()
let TagId=ref()


import budgetData from '../services/budget'
budgetData.getAllTags()
  .then((resp) => {
    expenseTypes.value = resp.data
    console.log(expenseTypes.value);
  })
  .catch(err => {
    console.log(err);
  })
function EditExpense(){
  budgetData.updateExpenses(props.ExpenseId,EditExpenseData.value)
    .then((resp) => {
      console.log(props.ExpenseId)
      console.log(EditExpenseData.value)
      console.log(resp.data);

    })
    .catch(err => {
      console.log(err);
    })
}




function test() {
  console.log("TagId:", TagId.value);
  console.log("expenseId:", ExpenseId.value);

  console.log("asd:", props.ExpenseId);
}

</script>