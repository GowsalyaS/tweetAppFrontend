import { Component } from "react";
import {modifyPost} from './../../components/Tweetapp/TweetService'
class UpdateComponent extends Component{
    constructor(props){
        super(props)
        const tweetId = window.location.href.split('/')[4]
        console.log(tweetId)
                this.state={
                    tweets:'',
                   tweetId:tweetId
                   
        
                }
        this.handleEventChange = this.handleEventChange.bind(this)
        this.updatePost = this.updatePost.bind(this)
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name]:event.target.value })
    }
    updatePost(){
        console.log(this.state.tweetId)
        modifyPost(
            this.state.tweetId,
        this.state.tweets
       )
       .then(response => {
            this.props.navigate('/dashboard')
        });
   
    }
    render(){
        const tweetId = window.location.href.split('/')[4]
//console.log(tweetId)
        return(
            <div className="container">
            <div className="row">
                <form className="login_form">
                <div className="form-group">
                        <label>Edit Post</label>
                                    <input className="form-control" type="text"  placeholder="Enter message" name="tweets" required onChange={this.handleEventChange} />
                                    
                                    </div>

                                    
                                    <div className="form-group">
                        <button type="button"  onClick={()=>this.updatePost(tweetId)} className="btn btn-default" >Send</button>
                    </div>

                                    
                    </form>
                    </div>
                    </div>
        );
    }
}

export default UpdateComponent;