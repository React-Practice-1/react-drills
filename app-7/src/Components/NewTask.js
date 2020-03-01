import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();

        this.state = {
            input: '',
        }
    }

    handleInput(val){
        this.setState({input: val})
    }

    handleClick(){
        this.props.Add(this.state.input)
        this.setState({input: ''})
    }

    render(){
        console.log(this.state.input)
        return(
            <div>
                <input value={this.state.input} onChange={(e) => this.handleInput(e.target.value)} />
                <button onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}

export default NewTask;