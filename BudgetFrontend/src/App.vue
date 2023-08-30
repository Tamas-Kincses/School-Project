<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { useUserStore } from './stores/users'
import { useRouter } from 'vue-router';
const { logoutUser,isLoggedIn } = useUserStore();
const router = useRouter();
let userStore = useUserStore()
userStore.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"))

function logout() {
  logoutUser()
    .then(() => {
      router.push('/');
      console.log(userStore.isLoggedIn)
    })
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg  ">
      <div class="container-fluid">
        <router-link class="nav-link" to="/"><img src="./assets/logo.png" class="logo" alt="" /></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/news">News</RouterLink>
            </li>
            <li v-if="userStore.isLoggedIn" class="nav-item">
              <RouterLink class="nav-link" to="/budget">Budget</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/exchange">Exchange Rates</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
          </ul>
          <div class="dropdown">
            <button class="dropdown-toggle btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="user-info-img" src="./assets/ProfileIcon.png" alt="" />

            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end p-2">
              <a v-if="!userStore.isLoggedIn" href="#" class="sub-menu-link">
                <img src="./assets/ProfileIcon.png" alt="" />
                <router-link class="sub-menu-link-item" to="/register">Sign up</router-link>
              </a>
              <a v-if="!userStore.isLoggedIn" href="#" class="sub-menu-link">
                <img src="./assets/ProfileIcon.png" alt="" />
                <router-link class="sub-menu-link-item" to="/login">Login</router-link>
              </a>
              <a href="#" class="sub-menu-link">
                <img src="./assets/settings.png" alt="" />
                <router-link class="sub-menu-link-item" to="/profile">Settings</router-link>
              </a>
              <a href="#" class="sub-menu-link">
                <img src="./assets/logout.png" alt="" />
                <p class="sub-menu-text"  @click="logout()">Logout</p>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.logo{
  width: 12rem;
}
.nav-link {
  color: white;
}

header {
  background-color: rgb(80, 79, 79);
  background-image: url("../assets/headerbackground.jpg");;
}

.sub-menu-text {
  margin-top: 12px;
}

.user-info-img {
  width: 45px;
  border-radius: 50%;
  margin-right: 15px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525525;
  margin: 15px 0;
}

.sub-menu-link-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525525;
  margin: 15px 0;
}


.sub-menu-link img {
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}


.sub-menu-link-item:hover {
  font-weight: 600;
}

.sub-menu-link:hover p {
  font-weight: 600;
}
</style>
