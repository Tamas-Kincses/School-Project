<template>
  <div class="modal fade" id="expenseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="Expamount" class="col-form-label">Expense amount:</label>
              <input type="number" v-model="NewExpenseData.amount" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="date" class="col-form-label">Type:</label>
              <select name="" v-model="TagExpenseId.tagId" id="">
                <option v-for="expenseType in expenseTypes" @change="getTagId(expenseType.id)" :value="expenseType.id">
                  {{ expenseType.name }}</option>
              </select>
            </div>
            <label for="Date" class="col-form-label">Date:</label>
            <input type="date" v-model="NewExpenseData.date" class="form-control" id="recipient-name">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="CreateExpense()">Add new expense</button>
          <button type="button" class="btn btn-secondary" @click="test()">test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let expenseTypes = ref([])
const props = defineProps(['ExpenseId']);
let NewExpenseData = ref({
  amount: "",
  date: "",

})

let TagExpenseId = ref({
  tagId: "",
  expenseId: ""
})
let expenseData = ref()
import budgetData from '../services/budget'
budgetData.getAllTags()
  .then((resp) => {
    expenseTypes.value = resp.data
    // console.log(expenseTypes.value);
  })
  .catch(err => {
    console.log(err);
  })

function CreateExpense() {
  console.log(NewExpenseData.value);
  budgetData.createExpenses(NewExpenseData.value)
    .then((resp) => {
      expenseData.value = resp.data
      TagExpenseId.value.expenseId = expenseData.value.id
      CreateTagsExpense()
      location.reload()
    })
    .catch(err => {
      console.log(err);
    })
}
function CreateTagsExpense() {
  budgetData.createTagsExpenses(TagExpenseId.value)
    .then((resp) => {
      console.log(TagExpenseId.value)
      console.log(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
}
function getTagId(tagId) {
  TagExpenseId.tagId.value = tagId

}
// function test() {
// console.log("TagId:",TagExpenseId.value.tagId);
// console.log("expenseId:",TagExpenseId.value.expenseId);

// console.log(props.ExpenseId);
// console.log(props);
// }

</script>