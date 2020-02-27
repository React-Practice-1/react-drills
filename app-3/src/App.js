import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      array: ['Cookies','Soda', 'Humans', 'Cats', 'Dogs', 'Ice Cream', 'Sushi', 'Bombay House', 'Bomb', 'Countries'],
      filterString: '',
    }
  }

  handleChange(filter){
    this.setState({filterString: filter})
  }


  render(){
    let foodsToDisplay = this.state.array
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h4 key={index}>{element}</h4>;
    });
    return(
      <div className='App'>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {foodsToDisplay}
      </div>
    )
  }
}

export default App;
