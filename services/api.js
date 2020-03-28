import axios from 'axios';


export const authUser = (username,password) => axios.post('https://covidrescue-2.herokuapp.com/login',{username,password});
