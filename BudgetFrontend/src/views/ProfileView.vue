<template>
    <div class="page-section m-3">
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-fluid">
                    <h6 class="card-header bg-secondary"> Your Details </h6>
                    <nav class="nav nav-tabs flex-column bg-secondary">
                        <router-link to="profile" class="nav-link text-light">Profile</router-link>
                        <router-link to="usersettings" class="nav-link text-light">Password</router-link>
                    </nav>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card card-fluid">
                    <h6 class="card-header bg-secondary"> Account </h6>
                    <div class="card-body bg-secondary">
                        <form>
                            <div class="form-group col-lg-6 col-md-6 col-sm-4">
                                <label for="input03" class="text-light">Username</label>
                                <div class="row">
                                    <div class="col-lg-4 pe-0">
                                        <input type="text" class="form-control" v-model="userData.username"
                                            :disabled="inputUsernameEnabler" id="input03">
                                    </div>
                                    <div class="col-lg-4">
                                        <button type="button" class="btn pi pi-cog btn-lg" @click="btnUsername()"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-lg-6 col-md-6 col-sm-4">
                                <div class="row">
                                    <label for="input03 " class="text-light">Email</label>
                                    <div class="col-lg-4 pe-0">
                                        <input type="email" class="form-control " v-model="userData.email"
                                            :disabled="inputEmailEnabler" id="input03">
                                    </div>
                                    <div class="col-lg-4">
                                        <button type="button" class="btn pi pi-cog btn-lg" @click="btnEmail()"></button>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-actions">
                                <button type="button" class="btn btn-primary" @click="Change()">Update Account</button>
                                <!-- <button type="button" class="btn btn-primary" @click="asd()">asd</button> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import budgetData from '../services/budget'

let userId = ref(localStorage.getItem("userId"))
let Data = ref({
    username: "",
    email: ""
})
let userData = ref({
    username: "",
    email: "",
    password:""

})
let inputUsernameEnabler = ref(true)
let inputEmailEnabler = ref(true)
let inputPswEnabler = ref(true)
budgetData.getUsersById(userId.value)
    .then(resp => {
        Data.value = resp.data
        userData.value.username = Data.value[0].username
        userData.value.email = Data.value[0].email
        userData.value.password = Data.value[0].password
    })
    .catch(err => {
        console.log(err);
    })

function btnUsername() {
    inputUsernameEnabler.value = !inputUsernameEnabler.value
}
function btnEmail() {
    inputEmailEnabler.value = !inputEmailEnabler.value
}
function btnPassword() {
    inputPswEnabler.value = !inputPswEnabler.value
}
function asd() {
    console.log(userData.value);
    
}
function Change() {
    budgetData.UpdateUserById(userId.value, userData.value)
        .then(resp => {console.log(userId.value,userData.value); })
        .catch(err => {
            console.log(err);
        })
}

</script>