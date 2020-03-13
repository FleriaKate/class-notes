import { createStore,combineReducers }  from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addExpense = (expense) => {
    return {
        type:'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description:expense.description ? expense.description : '',
            note: expense.note ? expense.note:'',
            amount: expense.amount ? expense.amount : 0,
            createdAt: expense.createdAt ? expense.createdAt : 0

        }
    }
}

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ] //Object.assign({},state,action.expense)
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


store.subscribe(() => {
    console.log(store.getState());
})
const expenseOne = store.dispatch(addExpense({description:'Vacation',amount:500}
));

const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:600 })
);

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

