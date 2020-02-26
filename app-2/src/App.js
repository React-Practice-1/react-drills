import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      array: ['oreos', 'candy', 'Mt. Dew', 'McCoy', 'Wells'],
    }
  }



  render(){
    let items = this.state.array.map((element, index) => {return <h2 key={index}>{element}</h2>})
    return(
      <div className='App'>
        <h2>{items}</h2>
      </div>
    )
  }
}

export default App;
