import axios from "axios"
const LOCAL_BASE_URL = "http://localhost:3000/"

export const LOCAL_URL_IMG="http://localhost:3000/"

class Localapis{
    getcategory(){
        return axios.post(LOCAL_BASE_URL+"getallcategory")
     }
    //  usergetsubcategory(){
    //     return axios.post(LOCAL_BASE_URL+"allsubcategory")
    //  }
     getproduct(){
        return axios.post(LOCAL_BASE_URL+"allproduct")
     }
   
}
export default new Localapis()