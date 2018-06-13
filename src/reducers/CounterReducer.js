//import React, { Component } from 'react';
import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from '../actions/type';
//const count=[0]

export default (state = [0], action) =>{
  const index = action.payload;
  switch (action.type) {

    case INCREMENT:
      //  console.log(index)
      const newState = state.map((item, i) => {
        if (i === index) {
          return item + 1;
        }
        return item
      })
      return newState;

    case DECREMENT:
      const newstate = state.map((item, i) => {
        if (i === index) {
          return item - 1;
        }
        return item
      })
      return newstate;

    case ADD_COUNTER:
      return [...state, 0];
      //   break;
    case REMOVE_COUNTER:
    //console.log(index)
      const NewState = state
      const stateTemp = [
        ...NewState.slice(0, index),
        ...NewState.slice(index+1)
      ];
      return stateTemp;
      //  NewState.slice(0,index);

      //  return NewState;
      //   break
    default:
      return state;
  }
}
