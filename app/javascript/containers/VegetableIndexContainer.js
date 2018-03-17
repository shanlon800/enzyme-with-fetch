import React, { Component } from 'react';

class VegetableIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetables: []
    }
  }
  render() {
    return(
      <h3>Vegetable Index Container</h3>
    )
  }
}

export default VegetableIndexContainer
