import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component{
  constructor(){
    super();

    this.state = {
          tasks: [],
          input: '',
    }
  }

  handleInput(val){
    this.setState({input: val})
  }

  handleAdd(){
    this.setState({tasks: [...this.state.tasks, this.state.input],
     input: ''
    })
  }

  render(){
    console.log(this.state.tasks)
    let list = this.state.tasks.map((element, index) => {return <Todo key={index} task={element}/>})
    return(
      <div className='App'>
        <h1>My to-do List:</h1>
        <input value={this.state.input} placeHolder='Enter task here' onChange={(e) => this.handleInput(e.target.value)}/>
        <button onClick={() => this.handleAdd()}>Add</button>
        {list}
      </div>
    )
  }
}

export default App;