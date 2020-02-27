import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsername(val){
        this.setState({username: val})
    }

    handlePassword(val){
        this.setState({password: val})
    }

    handleClick(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
        <div>
            <input onChange={(e) => this.handleUsername(e.target.value)}/>
            <input onChange={(e) => this.handlePassword(e.target.value)}/>
            <button onClick={() => this.handleClick() }>Login</button>
        </div>
        )
    }
}

export default Login