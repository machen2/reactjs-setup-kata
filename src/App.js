import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        fizzBuzzResult: '',
        inputValue: ''
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOnClick() {
    if(this.state.inputValue % '3' === 0) {
      this.setState({fizzBuzzResult: 'Fizz'})
    } else if (this.state.inputValue === '5') {
      this.setState({fizzBuzzResult: 'Buzz'});
    } else {
        this.setState({fizzBuzzResult: this.state.inputValue})
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1 className='form-title'>React FizzBuzz Form</h1>
        <input type='text' onChange={this.handleChange}/>
        <button onClick={this.handleOnClick}>Evaluate</button>
        <p className='fizz-buzz-result'>{this.state.fizzBuzzResult}</p>
      </div>
    );
  }
}

export default App;
