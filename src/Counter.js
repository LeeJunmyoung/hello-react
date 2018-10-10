import React, { Component } from 'react';

class Counter extends Component {
  state={
    number:0,
    counter:100
  }

  handleIncrease = ()=>{
    this.setState({
      number:this.state.number+1,
      counter:this.state.counter+1
    });
  }


  handleDecrease = ()=>{
    this.setState({
      number:this.state.number-1,
      counter:this.state.counter-1
    });
  }


  render() {
    return (
      <div>
        <div>이름: {this.props.name}</div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <div>카운터: {this.state.counter}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
