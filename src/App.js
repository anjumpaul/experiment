import React, { Component } from 'react';

import Conter from './components/Conter';

class App extends Component {
  render() {


    return (
        <Conter
        value={this.props.store.getState()}
        onIncrement={() =>
          this.props.store.dispatch({
            type: 'INCREMENT'
          })
        }
        onDecrement={() =>
          this.props.store.dispatch({
            type: 'DECREMENT'
          })
        }></Conter>



    );
  }
}

export default App;
