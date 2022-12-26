import { Component } from "react";

class DeleteComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            
           tweetId:tweetId
           

        }
this.handleEventChange = this.handleEventChange.bind(this)
    }
    handleEventChange(event) {
        this.setState({ 
            [event.target.name]:event.target.value })
    }

    render(){
        return(
            <div className="container">
            <div className="row">
                <form className="login_form">
                <div className="form-group">
                        <label>Edit Post</label>
                                    <input className="form-control" type="text"  placeholder="Enter message" name="tweets" required onChange={this.handleEventChange} />
                                    
                                    </div>

                                    
                                    <div className="form-group">
                        <button type="button" className="submit" onClick={()=>this.updatePost(tweetId)} className="btn btn-default" >Send</button>
                    </div>

                                    
                    </form>
                    </div>
                    </div>
        );
    }
}
export default DeleteComponent;