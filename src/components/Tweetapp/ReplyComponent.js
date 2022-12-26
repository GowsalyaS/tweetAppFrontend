import { Component } from "react";

import { postReply } from "./TweetService";
class ReplyComponent extends Component{

    constructor({props }){
        super(props)
        const tweetId = window.location.href.split('/')[4]
console.log(tweetId)
        this.state={
            reply:'',
            tag :'',
           tweetId:tweetId
           

        }
       // console.log(match.params)
        this.handleEventChange = this.handleEventChange.bind(this)
        this.addReply = this.addReply.bind(this)
        //const { tweetId } = this.props.match.params.tweetId;
//console.log(tweetId);
//const { tweetId } = this.props.match.params;
//console.log(this.props.urlElements);
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name]:event.target.value })
    }
    addReply( ){
        console.log(this.state.tweetId)
        postReply(
            this.state.tweetId,
        this.state.reply
       )
       .then(response => {
            this.props.navigate('/dashboard')
        });
   
    }
    

    render(){

        const queryParams = new URLSearchParams(window.location.href);
//const tweetId = queryParams.get('tweetId');
console.log(queryParams);
console.log(window.location.pathname);
let urlElements = window.location.href.split('/')
console.log(urlElements.value)
//let tweetId =urlElements[4].toString
const tweetId = window.location.href.split('/')[4]
console.log(tweetId)
//this.setState({tweetId:tweetId})
//const sampleLocation = useLocation();
        return(
            <div className="container">
                <div className="row">
                    <form className="login_form">
                    <div className="form-group">
                            <label>Add Reply</label>
                                        <input className="form-control" type="text"  placeholder="Enter message" name="reply" required onChange={this.handleEventChange} />
                                        
                                        </div>

                                        <div className="form-group">
                            <label>Tag</label>
                                        <input className="form-control" type="text"  placeholder="Enter name" name="tag" required onChange={this.handleEventChange} />
                                        
                                        </div>
                                        <div className="form-group">
                            <button type="button"  onClick={()=>this.addReply(tweetId)} className="btn btn-default" >Send</button>
                        </div>

                                        
                        </form>
                        </div>
                        </div>
        );
    }
}
export default ReplyComponent;