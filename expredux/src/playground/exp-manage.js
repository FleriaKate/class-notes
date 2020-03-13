import { createStore,combineReducers }  from 'redux';

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());
///expenses;;;filters
// const demoState = {
//     expenses: [{
//         id:'123abc',
//         description:'country travel',
//         note:'vacation holiday',
//         amount:50000,
//         createdAt: 30000
//     }],

//     filters: {
//         text: 'sport',
//         sortBy:'date', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }
