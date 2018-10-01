
/*

  sec011a_L099_ACTN_expenses.jsx

 */

import uuid from 'uuid';


export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE'
};



export const MP_addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {} ) => (
        {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense:
            {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }
                    );

export const MP_removeExpense = ( { id } = {} ) => (
        {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id
        }
                                   );


export const MP_editExpense = ( id, updates ) => (
        {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
            id,
            updates
        }
                                          );


//##########################################################################
//##########################################################################
