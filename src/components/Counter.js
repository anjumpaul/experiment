import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CounterAction, CounterActionDecrement } from '../actions';
class Counter extends Component {
render() {
  return (
    <div>
      <h1>{this.props.value}</h1>
      <button onClick={this.props.CounterAction}>+</button>
    <button onClick={this.props.CounterActionDecrement}>-</button>
    </div>
  )
}
}
const mapStateToProps = (state) =>
{
  //console.log(state);
  return {value:state}
}

export default connect(mapStateToProps, {CounterAction,CounterActionDecrement})(Counter)
