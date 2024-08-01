import axios from "axios"
const USER_BASE_URL = "http://localhost:3000/user/"
const token=sessionStorage.getItem("token")
console.log(token)
const header={
    Accept:"application/json",
    Authorization:token
 }
 export const USER_URL_IMG="http://localhost:3000/"

 class userApiServices{
    usergetcategory(){
        return axios.post(USER_BASE_URL+"getallcategory")
     }
     usergetsubcategory(){
        return axios.post(USER_BASE_URL+"allsubcategory")
     }
     usergetproduct(){
        return axios.post(USER_BASE_URL+"allproduct")
     }
 }
 export default new userApiServices()