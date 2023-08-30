<template>
  <div class="container text-light">
    <form @submit.prevent="submit">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="username">Username</label>
                <input class="form-control" type="text" name="username" placeholder="username"
                    v-model="userData.username" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" placeholder="password123" v-model="userData.password" />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account? <router-link to="/register">Register</router-link>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button" @click="login()">
        Login
      </button>
    </form>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/users'
const { loginUser } = useUserStore();
const router = useRouter();
const userData = ref({
  username: '',
  password: ''
})

function login() {
  console.log(userData.value);
  loginUser(userData.value)
        .then(() => {
            router.push('/');
        })
}

</script>
  
<style>
.container {
  width: 400px !important;
  max-width: 95%;
  margin-top: 25px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px
}

.input>label {
  text-align: start
}

.input>input {
  margin-top: 6px;
  height: 38px !important
}

.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: all .3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%)
}

.btn-pers:hover {
  background-color: #198754;
  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
  color: #fff;
  transform: translate(-50%, -7px)
}

.btn-pers:active {
  transform: translate(-50%, -1px)
}

.alternative-option {
  text-align: center
}

.alternative-option>span {
  color: #0d6efd;
  cursor: pointer
}
</style>