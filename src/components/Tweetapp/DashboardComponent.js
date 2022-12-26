import React, { Component} from "react";
import { Link } from "react-router-dom";
import './../../bootstrap.css';
import './../../css/login.css';
import './../../css/dashboard.css';
import SessionStroage from "./SessionStroage";
import { addTweet, getPost, removePost, likeTweet } from "./../../components/Tweetapp/TweetService";




class DashboardComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

            tweets: [],
            selected: "",
            loginId: 'loginId'
            // replypost:[]
            // setSelected :"choose One"

        }
        this.loggingOff = this.loggingOff.bind(this)
        this.postTweet = this.postTweet.bind(this)
        this.handleEventChange = this.handleEventChange.bind(this)
        this.allowUsertoReply = this.allowUsertoReply.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.getDetailsfromAPI = this.getDetailsfromAPI.bind(this)
        this.addingPost = this.addingPost.bind(this)
        this.goback = this.goback.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.editPost = this.editPost.bind(this)
        this.addreplyPost = this.addreplyPost.bind(this)
        this.addlikePost = this.addlikePost.bind(this)
    }
    handleEventChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    getUserProfile() {
        this.props.navigate('/userProfile')

    }

    loggingOff() {
        SessionStroage.removeToken()
    }
    editPost(tweetId) {
        this.props.navigate(`/update/${tweetId}`)
    }
    addreplyPost(tweetId) {
        this.props.navigate(`/reply/${tweetId}`)
    }

    addlikePost(tweetId) {
        likeTweet(tweetId)
        .then(response => {
            if (response.status === 200) {
                this.props.navigate('/dashboard')
            }

        });

    }
    postTweet() {
        addTweet(
            this.state.tweets
        )
            .then(response => {
                if (response.status === 200) {
                    this.props.navigate('/dashboard')
                }

            });
    }

    getDetailsfromAPI() {
        this.props.navigate(`/search/${this.state.loginId}`)
    }

    addingPost() {
        this.props.navigate('/post')
    }

    goback() {
        this.props.navigate('/home')
    }

    componentDidMount() {

        getPost().then(response => {
            this.setState({ tweets: response.data })
            console.log(response.data)
        })
    }

    allowUsertoReply() {
        //this.state.tweets.tweetId
        this.props.navigate(`/reply/${this.props.tweetId}`)
    }
    deletePost(tweetId) {
        removePost(
            tweetId
        ).then(
            this.props.navigate('/dashboard')
        )
    }



    render() {

        return (
            <div className="container">
                <div className="row">
                    <form className="login_form">
                        <h2 className="form_title">DashBoard</h2>
                        <div className="navBar">
                            <div className="logout-group1">
                                <button type="button" className="btn-btn-primary" onClick={this.getUserProfile} >Profile</button>

                            </div>
                            <div className="logout-button">
                                <button type="button" className="btn-btn-primary" onClick={this.addingPost}>Post</button>
                            </div>
                            <div className="logout-home">
                                <button type="button" className="btn-btn-primary" onClick={this.goback}>Home</button>
                            </div>
                            <div className="logout-group">
                                <Link to={"/logout"}>
                                    <button type="button" className="btn-btn-primary" onClick={this.loggingOff} >Logout</button>
                                </Link>
                            </div>
                            <div className="input-group">
                                <input type="search" className="form-control rounded" placeholder="Search" name="loginId" value={this.state.loginId} onChange={this.handleEventChange} aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" className="btn btn-primary" onClick={this.getDetailsfromAPI}>search</button>
                            </div>
                        </div>
                        {this.state.tweets.map(
                            tweet =>
                                <div className='tweet' key={tweet.tweetId}>
                                    <div className="col mb-3">
                                        <div className="card" >
                                            <div className="card-columns">
                                                <div className="card-body" style={{ width: "30%" }}></div>
                                                <div className="card-title">Posted by{tweet.userName}</div>
                                                <p className="card-text">{tweet.tweets}</p>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => this.editPost(tweet.tweetId)} style={{ width: "40%", height: "20%" }}>Edit</button>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => this.addreplyPost(tweet.tweetId)} style={{ width: "40%", height: "20%" }}>Reply</button>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => this.addlikePost(tweet.tweetId)} style={{ width: "40%", height: "20%" }}>Like</button>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => this.deletePost(tweet.tweetId)} style={{ width: "40%", height: "20%" }}>Delete</button>

                                                <div className="reply">
                                                    {tweet.replypost.map(
                                                        reply =>
                                                            <div className='reply=post' key={reply.repliedat}>
                                                                <div className="card-title">replied by {reply.replyid}</div>
                                                                <p className="card-text">{reply.replies}</p>
                                                            </div>
                                                    )}
                                                </div>
                                                <div className="like">
                                                    {tweet.likedby.map(
                                                        likes => 
                                                          
                                                            <div className='like-post' key={tweet.tweetId}>

                                                                <div className="card-text"> Liked by: {Object.keys(likes.userliked)[0]}</div>
                                                            </div>
                                                        
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;