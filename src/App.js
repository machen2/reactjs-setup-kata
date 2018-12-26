import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        fizzBuzzResult: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='form-title'>React FizzBuzz Form</h1>
        <button onClick={() => {this.setState({fizzBuzzResult: '1'})}}>Evaluate</button>
        <p className='fizz-buzz-result'>{this.state.fizzBuzzResult}</p>
      </div>
    );
  }
}

export default App;
