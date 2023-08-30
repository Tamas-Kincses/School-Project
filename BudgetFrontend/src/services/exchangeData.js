import Axios from 'axios';
Axios.defaults.baseURL = 'https://api.apilayer.com/exchangerates_data';
Axios.defaults.headers['apikey'] = '461sU8wsuIKGn04TNV4R4hqJRlRDGsvI';

export default {
    getAllCurrencies(){
        return Axios.get('/symbols')
    },
    convertCurrencies(selectedCurrencyTo,selectedCurrencyFrom,InputCurrencyAmount){
        return Axios.get(`convert?to=${selectedCurrencyTo}&from=${selectedCurrencyFrom}&amount=${InputCurrencyAmount}`)
    }
}