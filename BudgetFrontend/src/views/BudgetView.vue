<template>
  <div class="row">
    <div class="col-lg-6 card bg-secondary ">
      <div class="card-header pb-0">
        <h3>Expenses</h3>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase  text-xxs font-weight-bolder opacity-7">
                  Amount
                </th>
                <th class="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                  Type
                </th>
                <th class="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                  Date
                </th>
                <th class=" opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expense in expenses" class="text-light">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p>{{ expense.amount }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <table v-for="tag in tags">
                    <tr class="text-xs font-weight-bold mb-0">{{ tag[0].name }}</tr>
                  </table>
                </td>
                <td class="align-middle text-center">
                  <p>{{ expense.date }}</p>
                </td>
                <td class="align-middle">
                  <a href="javascript:;" @click="getExpsenseId(expense.id)" data-bs-toggle="modal"
                    data-bs-target="#EditExpenseModal" data-bs-whatever="@fat"
                    class="font-weight-bold text-xs btn btn-secondary">Edit</a>
                  <a href="javascript:;" class="font-weight-bold text-xs btn btn-secondary" @click="deleteExpenses(expense.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
          <button data-bs-toggle="modal" data-bs-target="#expenseModal" data-bs-whatever="@mdo"
            class="btn btn-primary d-md-flex mx-auto">Add new</button>
        </div>
      </div>
    </div>

    <!-- Expenses Modal -->
    <ExpenseModal :ExpenseId="ExpenseId"></ExpenseModal>
    <EditExpenseModal :ExpenseId="ExpenseId"></EditExpenseModal>

    <div class="col-lg-6 card bg-secondary ">
      <div class="card-header pb-0">
        <h3>Income</h3>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase  text-xxs font-weight-bolder opacity-7">
                  Amount
                </th>
                <th class="text-uppercase text-xxs font-weight-bolder opacity-7 ps-2">
                  Type
                </th>
                <th class="text-center text-uppercase text-xxs font-weight-bolder opacity-7">
                  Date
                </th>
                <th class="opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="income in incomes" class="text-light">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p>{{ income.amount }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ income.type }}</p>
                </td>
                <td class="align-middle text-center">
                  <p>{{ income.date }}</p>
                </td>
                <td class="align-middle">
                  <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#EditIncomeModal"
                    @click="getIncomeId(income.id)" data-bs-whatever="@fat"
                    class="font-weight-bold text-xs btn btn-secondary">Edit</a>
                  <a href="javascript:;" class="font-weight-bold text-xs btn btn-secondary" @click="DeleteIncome(income.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
          <button data-bs-toggle="modal" data-bs-target="#incomeModal" data-bs-whatever="@fat"
            class="btn btn-primary d-md-flex mx-auto">Add new</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Income Modal -->
  <IncomeModal></IncomeModal>
  <EditInComeModal :IncomeId="IncomeId"></EditInComeModal>
</template>
  
<script setup>
import { ref } from 'vue'
import budgetData from '../services/budget'
import { useUserStore } from '../stores/users'
import ExpenseModal from '../components/ExpenseModal.vue'
import IncomeModal from '../components/IncomeModal.vue'
import EditInComeModal from '../components/EditIncomeModal.vue'
import EditExpenseModal from '../components/EditExpenseModal.vue'
let expenses = ref([])
let expensesType = ref([])
let incomes = ref([])
let userId = ref()
let tags = ref([])
let ExpenseId = ref()
let IncomeId = ref()
const user = useUserStore();
userId.value = localStorage.getItem("userId")

function getIncomeId(incomeId) {
  IncomeId.value = incomeId
  console.log(IncomeId.value)
}
function getExpsenseId(expenseId) {
  ExpenseId.value = expenseId
  console.log(ExpenseId.value)
}

function DeleteIncome(incomeId) {
  budgetData.deleteIncomes(incomeId)
    .then(resp => {
      location.reload()
    })
    .catch(err => {
      console.log(err);
    })
}
function deleteExpenses(expenseId) {
  budgetData.deleteExpenses(expenseId)
    .then(resp => {
      location.reload()
    })
    .catch(err => {
      console.log(err);
    })
}


budgetData.getExpensesByUserId(userId.value)
.then(resp => {
  expenses.value = resp.data
  expenses.value.forEach(element => {
    budgetData.getByExpenseId(element.id)
    .then(resp => {
      expensesType.value = resp.data
      console.log("resp",resp.data)
      getTags()
    })
    .catch(err => {
      console.log(err);
    })
  });
    //console.log(expenses.value)
  })
  .catch(err => {
    console.log(err);
  })


budgetData.getIncomesByUserId(userId.value)
  .then(resp => {
    incomes.value = resp.data
    //console.log(incomes.value)
  })
  .catch(err => {
    console.log(err);
  })


  function getTags() {
    tags.value = []
  console.log("tagsvalue",tags.value)
  expensesType.value.forEach(element => {
    console.log("fos",expensesType.value.length)
    budgetData.getTagById(element.tagId)
    .then(resp => {
      console.log("kaki",expensesType.value);
      console.log("resp2",resp.data)
      tags.value.push(resp.data)
    })
    .catch(err => {
      console.log(err);
    })
  });
}
</script>

<style scoped>
#AddButton {
  margin-top: 7px;
}

.row {
  margin: 0px;
}
</style>