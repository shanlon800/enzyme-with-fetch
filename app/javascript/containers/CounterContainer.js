import React, { Component } from 'react';
import store from '../stores/store';

class CounterContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
    }
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
  }


  handleIncrease(event){
    event.preventDefault()
    this.props.onIncrease()
    console.log(store.getState());
    console.log(store)
  }

  handleDecrease(event){
    event.preventDefault()
    this.props.onDecrease()
    console.log(store.getState());
  }

  render(){
    console.log('Initial State of Store');
    console.log(store.getState());
    return(
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    )
  }
}

export default CounterContainer;
