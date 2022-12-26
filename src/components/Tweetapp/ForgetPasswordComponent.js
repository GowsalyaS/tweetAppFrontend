
import React, { Component } from "react";
import './../../bootstrap.css';
import './../../css/login.css';
import { forgotpasswordService } from "./UserService";


class ForgetPasswordComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            loginId:this.loginId,
            password:this.password

        }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.changePassword = this.changePassword.bind(this)
        
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name] : event.target.value })
    }

   

render()
{
    return(
        <div className="container">
                <div className="row">
                    <form className="login_form">
                        <h2 className="form_title">Reset Password</h2>
                        <div className="form-group">
                            <label>LoginId</label>
                            <input className="form-control" type="text" value= {this.state.loginId} placeholder="Enter loginId" name="loginId" required style={{ animation: "show 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password"value= {this.state.password} placeholder="Enter New Password" name="password" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        
                        <div className="form-group">
                            <button type="button"  onClick={this.changePassword} className="btn btn-default" style={{ animation: "show 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }}>Reset</button>
                        </div>

                    </form>
                </div>
            </div>
    );
}

changePassword(){
  forgotpasswordService(this.state.loginId,{
        password:this.state.password
    })
    .then(response => this.props.navigate('/login'),
        console.log(this.state.loginId,this.state.password)
       )
}
}

export default ForgetPasswordComponent;