import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      input: ''
    }
  }
  
  handleInput(val){
    this.setState({input: val})
  }

  render(){
    return(
      <div className='App'>
        <input onChange={(e) => this.handleInput(e.target.value)}/>
        {this.state.input}
      </div>
    )
  }
}

export default App;
