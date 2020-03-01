import React, {Component} from 'react';
import './App.css'
import NewTask from './Components/NewTask';
import List from './Components/List'

class App extends Component{
  constructor(){
    super();

    this.state = {
      list: [],
    }

    this.handleAddTask = this.handleAddTask.bind(this)

  }

  handleAddTask(val){
    this.setState({list: [...this.state.list, val]})
  }

  render(){
    console.log(this.state.list)
    return(
      <div className="App">
        <h1>My to-do List:</h1>
        <NewTask Add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
      </div>
    )
  }
}

export default App;
