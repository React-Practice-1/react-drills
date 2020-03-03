import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: '',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(val){
        this.setState({input: val})
    }

    handleClick(){
        this.props.add(this.state.input);
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.handleInput(e.target.value)} value={this.state.input} placeholder='Enter New Task'/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default NewTask;