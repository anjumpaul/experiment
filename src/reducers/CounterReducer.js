//import React, { Component } from 'react';
import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from '../actions/type';
// const INITIAL_STATE = {
//   count:[0]
// }
 export default (state = 0, action) =>{
//console.log(action.type)
  switch (action.type) {
    case INCREMENT:
      return state+ 1;
    case DECREMENT:
      return state - 1;
    // case ADD_COUNTER:
    //   break;
    // case REMOVE_COUNTER:
    //   break
    default:
      return state;
  }
}
