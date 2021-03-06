
/*

sec011a_L101_expense_list.jsx

 */

import React from 'react';
import { connect } from 'react-redux';
import SFC_expense_list_item from "./sec011a_L102_expense_list_item.jsx";
import MP_SLCT_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";


let cnt = 0;

export const SFC_expense_list = (P_props) => (
<div>
  <h1>Expense List</h1>
  {
    P_props.expenses.length === 0 ? (
        <p>No Expenses</p>
    ) : (
        P_props.expenses.map ( (P_expense) => (
           <SFC_expense_list_item key={P_expense.id} {...P_expense} />
                                              )
                             )
    )
  }
</div>
    );

const GC_map_state_to_props = (P_state) =>  {
    return {
            expenses: MP_SLCT_getVisibleExpenses
                         (P_state.expenses, P_state.filters)
           };
};


export default connect (GC_map_state_to_props)(SFC_expense_list);
