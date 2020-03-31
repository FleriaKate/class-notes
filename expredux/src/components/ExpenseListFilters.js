import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions'
6
const ExpenseListFilters = props => {
    return (
        <div>
        <input  type ="text"
         value={mapStateToPropst.filters.text}
         onChange={e => {
             props.dispatch(setTextFilter(e.target.value));
         }} 
         />
         <select 
             value={props.filters.sortBy}
             onChange={e => {
                     if (e.target.value === "amount"){
                         props.dispatch(sortByAmount());
                     }else if (e.target.value === "amount") {
                         props.dispatch(sortByAmount());
                     }
                 }}
                 >
                <option value="date">Date</option>
                 <option value="amount">Amount</option>
         </select>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        filters: state.filters
    };
};



export default connect(mapStateToProps)(ExpenseListFilters);