import {  createStore } from 'redux';

const countReducer = (state = { count: 0},action) => {
   switch (action.type) {
       case 'INCREMENT':

           return {
               count: state.count + action.incrementBy
           }
         case 'DECREMENT':

                return {
                    count :state.count - action.decrementBy
               }
             
          case 'RESET':
              return {
                  count:0
              }
              case 'SET':
                  return {
                  const :action.count
              }    
         default:
             return state;  
   }
}

store.subscribe ((() => {
    console.log(store.getState());
}))

//Actions  -> an object  that gets sent to the store

//Action-creator - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) =>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const  setCount = (payload)  => {
    return {
        type: 'SET',
        count: payload.count
    }
}

const  resetCount = () =>{
    return {
        type: 'RESET'
    }
}

const store = createStore(countReducer);

store.subscribe((() => {
    console.log(store.getState());
}));

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(decrementCount());



store.dispatch(setCount({count : 150}));

