import { Component } from "react";
import './../../bootstrap.css';
import './../../css/logout.css';
import { Link } from "react-router-dom";
class LogoutCompontent extends Component{

    render(){
        return(
<div className="container">
                <div className="row">
                    <form className="login_form">
                    <div className="form-group">
                            <p>you have been successfully logged out.</p>
                        </div>
                        
                        <div className="form-group">
                        <Link to="/login">
                            <button type="button"  onClick={this.allowUser} className="btn btn-default" style={{ animation: "show 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28)" }}>Log in Back</button>
                        </Link>
                        </div>

                        

                    </form>
                </div>
            </div>
        );
    }
}
export default LogoutCompontent;