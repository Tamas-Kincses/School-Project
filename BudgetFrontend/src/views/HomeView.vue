<script setup>

</script>

<template>
  <div class="row scrollable-container " id="Home">
    <div class="col-lg-4 ms-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">News</h5>
          <hr>
          <p class="card-text">Added more currencies!</p>
          <p class="card-text">External servers might be slow!</p>
          <p class="card-text">Please be patient! Thank you for your understanding!</p>
          <div class="col-lg-12">
            <router-link class="btn btn-danger" to="/news">Read more</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Budgetcalculator</h5>
          <hr>
          <p class="card-text">Manage your future!</p>
          <p class="card-text">Login or register to access the budget panel!</p>
          <div class="row">
            <div class="col-lg-6">
              <router-link class="btn btn-danger" to="/register">Register Now</router-link>
            </div>
            <div class="col-lg-6">
              <router-link class="btn btn-danger" to="/login">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card ">
        <div class="card-body">
          <h5 class="card-title">Exchange your currency!</h5>
          <hr>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <div class="col-lg-12">
            <router-link class="btn btn-danger" to="/exchange">Exchange rates</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
#Home {
  background-size: cover;
  overflow: hidden;
  position: fixed;
}

.row {
  color: white;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.card {
  background-color: #4e66d0;
  font-size: 1.5rem;
  margin-bottom: 30px;
  margin-top: 25px;
  border-radius: 30px;
  margin: 25px 0 45px 0;
  padding: 10px 5px;
}
</style>