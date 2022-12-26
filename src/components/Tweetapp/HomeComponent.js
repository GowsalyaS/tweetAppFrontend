import { Component } from "react";
import { getUserTweet } from './../../components/Tweetapp/TweetService'
import './../../css/dashboard.css';
import SessionStroage from "./SessionStroage";
import { Link } from "react-router-dom";
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            tweets: []
        }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.loggingOff = this.loggingOff.bind(this)
        this.todashBoard = this.todashBoard.bind(this)
    }
    handleEventChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loggingOff() {
        SessionStroage.removeToken()
    }
    todashBoard() {
        this.props.navigate('/dashboard')
    }

    componentDidMount() {
        getUserTweet().then(response => {
            this.setState({ tweets: response.data })
            console.log(response.data)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="login_form">
                    <h2 className="form_title">Home</h2>
                    <div className="logout-group">
                    <Link to={"/logout"}>
                    <button type ="button" className="btn-btn-primary" onClick={this.loggingOff} >Logout</button>
                    </Link>
                    </div>
                
                <div className="logout-group1" style={{width:"40%"}}>
                    <button type="button" className="btn-btn-primary" onClick={this.todashBoard}>DashBoard</button>
                </div>
                {this.state.tweets.map(
                    tweet =>
                        <div className='tweet' key={tweet.id}>
                            <div className="col mb-3">
                                <div className="card" >
                                    <div className="card-text">  TweetId: {tweet.tweetId}</div>
                                    <div className="card-text">  UserName: {tweet.userName}</div>
                                    <div className="card-text"> Tweet: {tweet.tweets}</div>
                                    {tweet.likedby.map(
                                        likes => 
                                            /*likes.userliked.map(
                                                like =>{
                                               // let keys = Object.keys(like.userliked);
                                                console.log(like);*/
                                                
                                                //console.log(likes.userliked[0]);
                                                <div className='like-post' key={likes.id}>
                                                     console.log(like);
                                                    <div className="card-text"> Liked by: {Object.keys(likes.userliked)[0]}</div>
                                                </div>
                                                 
                                       // )
                                    )}

                                           
                                    
                                    {tweet.replypost.map(
                                        reply =>
                                            <div className='reply-post' key={reply.repliedat}>
                                                <div className="card-text">Replied by: {reply.replyid}</div>
                                                <div className="card-text"> Reply:{reply.replies}</div>
                                                <div className="card-text"> Replied at:{reply.repliedat}</div>
                                            </div>
                                    )}
                                    <div className="card-text"> Posted at : {tweet.postedat}</div>


                                </div>
                            </div>

                        </div>

                )
                }
            </form>
                        </div >
            </div >
        );
    }
}
export default HomeComponent;