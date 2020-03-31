import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions'

const ExpenseListFilters = props => {
    return (
        <div>
        <input  type ="text" value={mapStateToPropst.filters.text} />
        </div>
    );
};

const mapStateToProps = state => {
    return{
        filters: state.filters
    };
};



export default connect(mapStateToProps)(ExpenseListFilters);