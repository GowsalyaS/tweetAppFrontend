import axios from "axios";

import authHeader from "./AuthService";


    export function forgotpasswordService(loginId,users){
         return axios.post(`http://3.80.223.163:8443/api/v1.0/tweets/${loginId}/forgot`,users)

     }

     export function registerUser(users){
         return axios.post('http://3.80.223.163:8443/api/v1.0/tweets/register',users)
     }

     export function validateUser(login_id,password){
        return axios.post("http://3.80.223.163:8443/api/v1.0/tweets/login",{
            "login_id":login_id,
            "password":password
             },{})
    }


export function getUserName(loginId) {
    //const decode= jwt_decode(localStorage.getItem('user'))
    
    return axios.post("http://3.80.223.163:8443/api/v1.0/tweets/user/search/username",{
        "loginid":loginId
         },{
       headers: authHeader()}
       )
    
}

