import React, { Component } from 'react'
import { connect } from 'react-redux';

//import NewCounter from './NewCounter'
class Counter extends Component {
render() {
  const {index}=this.props
  return (
    <div>
      <h1>{this.props.value}</h1>
      <button onClick = {() => this.props.CounterAction(index)}>+</button>
    <button onClick = {() => this.props.CounterActionDecrement(index)}>-</button>
    <button onClick = {() => this.props.removeCounter(index)}>remove counter</button>
    </div>
  )
}
}
//const mapStateToProps = (state) =>
//{
  //console.log(state);
  //return {value:state}
//}
 export default Counter
