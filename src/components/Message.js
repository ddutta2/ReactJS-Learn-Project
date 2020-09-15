import React, {Component} from 'react';

// Class based component
class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        };
    }

    updateMessage(){
        this.setState({
            message: 'Thanks for Subscription'
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.updateMessage()}>Update</button>
            </div>
        )
    }
}

export default Message;