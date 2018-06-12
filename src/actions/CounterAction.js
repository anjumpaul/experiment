import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from './type';

export const CounterAction =() =>{
  //console.log('incr');
  return {
    type:INCREMENT
  }
}

export const CounterActionDecrement =() =>{
  //console.log('DECREMENT');
  return {
    type:DECREMENT
}
}
export const addCounter = () => {
  return{
    type:ADD_COUNTER
  }
}
export const removeCounter = () => {
  return{
    type:REMOVE_COUNTER
  }
}
