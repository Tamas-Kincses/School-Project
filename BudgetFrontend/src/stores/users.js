import { defineStore } from 'pinia';
import Axios from '../services/dataservice.js'
export const useUserStore = defineStore({
    id: 'UserStore',
    state: () => ({
        users: [],
        user: 0,
        userId: 0,
        isLoggedIn:false,
    }),
    getters: {
    },
    actions: {
        getAllUsers() {
            return Axios.get('/users')
                .then(resp => {
                    console.log(resp.data);
                    this.users = resp.data;
                })
                .catch()
        },
        registerUser(userData){
            return Axios.post('/register',userData)
                .then(()=>{return;})
                .catch(error=>{
                    console.log(error);
                })
        },
        loginUser(userData){
            return Axios.post('/login',userData)
                .then((resp)=>{
                    this.user=resp.data
                    this.userId = this.user.user.id
                    this.isLoggedIn=true
                    console.log(this.userId)
                    localStorage.setItem('userId',this.userId)
                    localStorage.setItem('isLoggedIn',this.isLoggedIn)
                    
                })
                .catch(error=>{
                    console.log(error);
                })
        },
        logoutUser() {
            return Axios.post('/logout')
                .then(resp=>{
                    console.log(resp.data)
                    this.isLoggedIn=false
                    localStorage.setItem('isLoggedIn',this.isLoggedIn)
                })
                .catch()
        },


    }
});