import { Component } from "react";

class SessionStroage extends Component{

    saveToken(response){
        localStorage.setItem("user", response);
    }

    removeToken(){
        localStorage.removeItem("user");
    }

    getToken(){
        localStorage.getItem("user");
    }
}
export default new SessionStroage();