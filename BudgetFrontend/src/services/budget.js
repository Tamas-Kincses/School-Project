import Axios from './dataservice'

export default {
    getExpensesByUserId(userId){
        return Axios.get(`/expenses/${userId}`)
    },
    createExpenses(expenseData){
        return Axios.post(`/expenses/create`,expenseData)
    },
    updateExpenses(Id,expenseData){
        return Axios.put(`/expenses/update/${Id}`,expenseData)
    },
    deleteExpenses(Id){
        return Axios.delete(`/expenses/delete/${Id}`)
    },
    getIncomesByUserId(userId){
        return Axios.get(`/incomes/${userId}`)
    },
    createIncome(incomeData){
        return Axios.post(`/incomes/create`,incomeData)
    },
    updateIncomes(editIncomeData,Id){
        return Axios.put(`/incomes/update/${Id}`,editIncomeData)
    },
    deleteIncomes(Id){
        return Axios.delete(`/incomes/delete/${Id}`)
    },
    getByExpenseId(expenseId){
        return Axios.get(`/tagsExpenses/expense/${expenseId}`)
    },
    getTagById(id){
        return Axios.get(`/tags/${id}`)
    },
    getUsersById(Id) {
        return Axios.get(`/users/${Id}`)
    },
    UpdateUserById(Id,userData) {
        return Axios.put(`/users/${Id}`,userData)
    },
    getAllTags(){
        return Axios.get(`/tags`)
    },
    createTagsExpenses(tagExpenseId){
        return Axios.post(`/tagsExpenses/create`,tagExpenseId)
    },
}