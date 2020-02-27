import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      array: ['Cookies','Soda', 'Humans', 'Cats', 'Dogs', 'Ice Cream', 'Sushi', 'Bombay House', 'Bomb', 'Countries']
    }
  }
  render(){
    return(
      <div className='App'>
        <input/>
      </div>
    )
  }
}

export default App;
