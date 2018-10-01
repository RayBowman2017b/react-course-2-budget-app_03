
/*
  sec011a_L099_STR_configure_store.jsx

 */

import { createStore, combineReducers } from 'redux';

import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";
import MP_filtersReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";

export default () => {

const L_store = createStore
        (
            combineReducers (
            {
                expenses: MP_expensesReducer,
                filters: MP_filtersReducer
            }
                            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    return L_store;
}

