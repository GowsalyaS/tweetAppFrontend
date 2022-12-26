import React, { Component } from "react";
import './../../bootstrap.css';
import './../../css/login.css';
import  { registerUser } from './../../components/Tweetapp/UserService';


class SignupComponent extends Component{
   
    constructor(props) {
        super(props)
        this.state = {
            loginid: "loginid",
            fristname:"fristname",
            lastname:"lastname",
            email:'email',
            password: "password",
            confirmpassword:'confirmpassword',
            contactNumber:'contactNumber',
        }
        this.handleEventChange = this.handleEventChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.registerClicked= this.registerClicked.bind(this)
        
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name] : event.target.value })
    }
    registerClicked(){
       registerUser({
            loginid: this.state.loginid,
            fristname:this.state.fristname,
            lastname:this.state.lastname,
            email:this.state.email,
            password: this.state.password,
            confirmpassword:this.state.confirmpassword,
            contactNumber:this.state.contactNumber

        }).then(response => this.props.navigate('/login'))
        .catch(error =>console.log(error.response.data.message))
        
    }
   
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    <form className="login_form">
                        <h2 className="form_title">Sign Up</h2>
                        <div className="form-group">
                            <label>LoginId</label>
                        
                            <input className="form-control" type="text" value= {this.state.loginId} placeholder="Enter loginId" name="loginid" required style={{ animation: "show 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange}/>
                        </div>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input className="form-control" value= {this.state.fristname} type="text" placeholder="Enter FirstName" name="fristname" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input className="form-control" value= {this.state.lastname} type="text" placeholder="Enter LastName" name="lastname" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" value= {this.state.email} placeholder="Enter Email" name="email" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" value= {this.state.password} placeholder="Enter Password" name="password" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>ConfirmPassword</label>
                            <input className="form-control" type="password" value= {this.state.confirmpassword} placeholder="Enter ConfirmPassword" name="confirmpassword" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>ContactNumber</label>
                            <input className="form-control" type="text" value= {this.state.contactNumber} placeholder="Enter ContactNumber" name="contactNumber" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={ this.registerClicked}   className="btn btn-default" style={{ animation: "show 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }}>Register </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignupComponent;