import { Component } from "react";
import {postTweet} from'./../../components/Tweetapp/TweetService';
class PostTweetComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            tweet:'',
           
        }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.addpost=this.addpost.bind(this)
    }
    handleEventChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addpost( ){
       // console.log(this.state.tweetId)
        postTweet(
            this.state.tweet
       
       )
       .then(response => {
            this.props.navigate('/dashboard')
        });
   
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <form className="login_form">
                    <div className="form-group">
                            <label>Add Post</label>
                                        <input className="form-control" type="text"  placeholder="Enter message" name="tweet" required onChange={this.handleEventChange} />
                                        
                                        </div>

                                        <div className="form-group">
                            <button type="button"  onClick={()=>this.addpost()} className="btn btn-default" >Send</button>
                        </div>

                                        
                        </form>
                        </div>
                        </div>
        );
    }
}
export default PostTweetComponent;