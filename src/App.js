import React, { Component } from 'react';

import Counter from './components/Counter';
import { connect } from 'react-redux';
import {
  CounterAction,
  CounterActionDecrement,
  addCounter,
  removeCounter
} from './actions';
class App extends Component {
  render() {

    return (
      <div>
        {this.props.value.map((item,index) =>
      (<Counter
        value={item}
        index={index}
        CounterAction={this.props.CounterAction}
        CounterActionDecrement={this.props.CounterActionDecrement}
        removeCounter={this.props.removeCounter}
      />))}
      <button onClick={this.props.addCounter}>add counter</button>
    </div>
    );
  }
}

const mapStateToProps = (state) =>
{
  //console.log(state);
  return {value:state}
}
 export default connect(mapStateToProps, {CounterAction,CounterActionDecrement,addCounter,removeCounter}) (App)
