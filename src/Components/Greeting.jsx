import React,{Component} from 'react';

class Greeting extends Component{
    render(){
        return(
            <h1>Hello {this.props.greet}</h1>
        )
    }
}

export default Greeting;