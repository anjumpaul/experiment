import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from './type';

export const CounterAction =(index) =>{
  //console.log('incr');
  return {
    type:INCREMENT,
    payload:index
  }
}

export const CounterActionDecrement =(index) =>{
  //console.log('DECREMENT');
  return {
    type:DECREMENT,
    payload:index
}
}
export const addCounter = () => {
  return{
    type:ADD_COUNTER
  }
}
export const removeCounter = (index) => {
  return{
    type:REMOVE_COUNTER,
    payload:index
  }
}
