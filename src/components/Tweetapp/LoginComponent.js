
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './../../bootstrap.css';
import './../../css/login.css';
import SessionStroage from "./SessionStroage";
import { validateUser } from "./UserService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login_id: '',
            password: '',
            invalid:false
        }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.allowUser= this.allowUser.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name]:event.target.value })
    }

    allowUser(){
        
     validateUser(
            this.state.login_id,
            this.state.password
        )
        .then(response =>{
            if (response.status===200) {
                this.setState({invalid:false})
                SessionStroage.saveToken(response.data)
                this.props.navigate('/dashboard')
              }

            },(error) =>{
                if(error.status===401){
                    console.log("if")
                    this.setState({invalid:true})
                }
                else{
                    console.log("invalid")
                    this.setState({invalid:true})
                }
            }
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="login_form">
                        <h2 className="form_title">Sign In</h2>
                        {this.state.invalid ? <h2 className="form_title">Invalid Credentials</h2>:""}
                        <div className="form-group">
                            <label>LoginId</label>
                            <input className="form-control" type="text"  placeholder="Enter loginId" name="login_id" required style={{ animation: "show 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password"  placeholder="Enter Password" name="password" required style={{ animation: "show 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }} onChange={this.handleEventChange} />
                        </div>
                        <div className="form-group">
                            <button type="button"  onClick={this.allowUser} className="btn btn-default" style={{ animation: "show 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }}>Log in</button>
                        </div>

                        <p className="forgot-password ">
                            Forgot <Link to="/forgotPassword">password?</Link>
                        </p>
                        <p className="new-user">
                            New User <Link to="/register">sign up?</Link>
                        </p>


                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;