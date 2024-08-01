/* eslint-disable import/no-anonymous-default-export */
// ----------------------------------------- ADMIN APIS ---------------------------------------
import axios from "axios"
const BASE_URL = "http://localhost:3000/admin/"
const token=sessionStorage.getItem("token")
console.log(token)

const header1={
   Accept:"application/json",
   Authorization:token
}

export const BASE_URL_IMG="http://localhost:3000/"
class apiServices {
   // ----------------------------------Authentication APIs Start-----------------------------------
   register(data) {
      return axios.post(BASE_URL + "register", data)
   }
   login(data) {
      return axios.post(BASE_URL + "login", data)
   }

   // ---------------------------------Authentication APIs End-----------------------------------

   // --------------------------------Admin Add APIs start-----------------------------------------

   addcategory(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"addcategory",  data, { headers: header })
   }
   addsubcategory(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"addsubcategory",  data, { headers: header })
   }
   addproduct(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header3 = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"addproduct",  data, { headers: header3 })
   }

   // -------------------------------Admin Add APIs End-----------------------------------------

   // ---------------------------------Get APIs Start-----------------------------------------

   getcategory(){
      return axios.post(BASE_URL+"getallcategory")
   }
   getsubcategory(){
      return axios.post(BASE_URL+"allsubcategory")
   }
   getproduct(){
      return axios.post(BASE_URL+"allproduct")
   }
  
   // -----------------------------Get APIs End----------------------------

   // -----------------------------Get Single APIs start-----------------------
   getsinglecategory(_id){
      let data={
         _id:_id
      }
      return axios.post(BASE_URL+"getsinglecategory",data,{headers:header1})
   }
   singlesubcategory(_id){
      let data={
         _id:_id
      }
      return axios.post(BASE_URL+"singlesubcategory",data,{headers:header1})
   }
   getsingleproduct(_id){
      let data={
         _id:_id
      }
      return axios.post(BASE_URL+"getsingleproduct",data,{headers:header1})
   }
   // ---------------------------Get Single APIs start----------------------------


   // ---------------------------Admin Update APIs start--------------------------
   updatecategory(data){
      return axios.post(BASE_URL+"updatecategory",data,{headers:header1})
   }
   updatesubcategory(data){
      return axios.post(BASE_URL+"updatesubcategory",data,{headers:header1})
   }
   updateproduct(data){
      return axios.post(BASE_URL+"updateproduct",data,{headers:header1})
   }
   // ---------------------------Admin Update APIs end-----------------------------

}

export default new apiServices()