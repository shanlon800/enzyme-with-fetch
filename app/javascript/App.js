import React from 'react'
import VegetableIndexContainer from './containers/VegetableIndexContainer'
import CounterContainer from './containers/CounterContainer'
import store from './stores/store';


const App = props => {
  return(
    <CounterContainer
      value={store.getState()}
      onIncrease={() =>
        store.dispatch({
          type: 'ADD_ONE'
        })
      }
      onDecrease={() =>
        store.dispatch({
          type: 'MINUS_ONE'
        })
      }
    />
  )
}

export default App;
