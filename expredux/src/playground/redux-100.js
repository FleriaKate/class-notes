import {  createStore } from 'redux';

const store = createStore((state = { count: 0},action) => {
   switch (action.type) {
       case 'INCREMENT':1
           return {
               count: state.count + action.incrementBy
           }
         case 'DECREMENT':1
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
});

store.subscribe ((() => {
    console.log(store.getState());
}))

//Actions  -> an object  that gets sent to the store

//Action-creator - functions that return action objects
const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy
        : 1
    }
}

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy:typeof payload.decrementBy === 'number'? payload.decrementBy
        : 1    
    }
}
     
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(decrementCount());


store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
})


store.dispatch({
    type: 'DECREMENT'
});


store.dispatch({
    type: 'DECREMENT'
});


store.dispatch({
    type: 'SET',
    count:150
})

