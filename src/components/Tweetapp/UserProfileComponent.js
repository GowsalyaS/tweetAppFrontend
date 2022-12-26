import { Component } from "react";
import SessionStroage from "./SessionStroage";
import jwt_decode from 'jwt-decode';
import { getUserName } from "./UserService";
import { Link } from "react-router-dom";
class UserProfileComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            loginId:''
        }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.loggingOff = this.loggingOff.bind(this)
    }
    handleEventChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loggingOff() {
        SessionStroage.removeToken()
    }

    componentDidMount() {
       // const loginId = window.location.href.split('/')[4]
       // console.log(loginId)
       // console.log(this.state.loginId)
       const decode= jwt_decode(localStorage.getItem('user'))
       console.log(decode.sub)
        getUserName(decode.sub).then(response => {
            this.setState({ users: response.data })
            console.log(response.data)
        })
    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <form className="login_form">
                    <h2 className="form_title">DashBoard</h2>
                    <div className="logout-group">
                                <Link to={"/logout"}>
                                    <button type="button" className="btn-btn-default" onClick={this.loggingOff} >Logout</button>
                                </Link>
                            </div>

                            
                {this.state.users.map(
                    user =>
                    <div className='tweet' key={user.loginid}>
                    <div className="col mb-3">
                    <div className="card" >
                    <div className="card-text">  LoginId: {user.loginid}</div>
                    <div className="card-text">  FirstName: {user.fristname}</div>
                    <div className="card-text"> LastName: {user.lastname}</div>
                    <div className="card-text"> Email: {user.email}</div>
                    <div className="card-text"> ContactNumber: {user.contactnumber}</div>
                    </div>
                    </div>

                    </div>
                   
                )
                }
                    </form>
                        </div>
            </div>

        );
    }
}
export default UserProfileComponent;