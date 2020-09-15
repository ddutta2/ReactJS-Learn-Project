import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }

    increment(){
        // this.setState({
        //     count: this.state.count+1
        // }, ()=>{
        //     console.log('Callback value : '+this.state.count);
        // });

        // console.log(this.state.count)

        this.setState((prevState, props) => ({
            count: prevState.count + parseInt(props.addValue)
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={()=>this.incrementFive()}>Increase</button>
            </div>
        )
    }
}

export default Counter;
