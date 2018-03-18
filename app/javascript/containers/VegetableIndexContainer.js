import React, { Component } from 'react';

import VegetableTile from '../components/VegetableTile'

class VegetableIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetables: []
    }
  }

  componentWillMount(){
    fetch('api/v1/vegetables')
    .then(response => {
      if (response.ok){
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let vegetableList = body;
      this.setState({vegetables: vegetableList});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let vegetables = this.state.vegetables.map(veg => {
      return(
        <VegetableTile
        vegetable={veg.name}
        key={veg.id}
        />

      )
    })

    return(
      <div>
        <h3>Vegetable Index Container</h3>
        {vegetables}
      </div>
    )
  }
}

export default VegetableIndexContainer
