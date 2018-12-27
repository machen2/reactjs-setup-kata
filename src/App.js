import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        fizzBuzzResult: '',
        inputValue: ''
    };
  }

  handleOnClick = (event) => {
    event.preventDefault();
    if(this.state.inputValue === '') {
      this.setState({fizzBuzzResult: ''})
    } else if (this.state.inputValue % 15 === 0) {
      this.setState({fizzBuzzResult: 'FizzBuzz'})
    } else if (this.state.inputValue % 3 === 0) {
      this.setState({fizzBuzzResult: 'Fizz'})
    } else if (this.state.inputValue % 5 === 0) {
      this.setState({fizzBuzzResult: 'Buzz'});
    } else {
        this.setState({fizzBuzzResult: this.state.inputValue})
    }
  };

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

  render() {
    return (
      <div className='App'>
        <h1 className='form-title'>React FizzBuzz</h1>
        <form onSubmit={this.handleOnClick}>
          <input id='input-box' type='text' onChange={this.handleChange} />
          <input type='submit' value='Submit'/>
        </form>
        {this.state.fizzBuzzResult !== '' && <p className='fizz-buzz-result'>{this.state.fizzBuzzResult}</p>}
      </div>
    );
  }
}

export default App;
