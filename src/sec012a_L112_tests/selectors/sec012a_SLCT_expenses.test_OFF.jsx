
/*

//  SEC_012 --- 115. Testing Expenses Selector 17:03

  sec012a_SLCT_expenses.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\
selectors\sec012a_SLCT_expenses.test.jsx

 */

//  SEC_011 --- 110. Filtering by Dates 19:44
import moment from 'moment';

import MP_getVisibleExpenses from "../../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";

//    const GC_expenses --- moved to a fixture in
//  SEC_012 --- 117. Testing Expenses Reducer 15:10

import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";

//=====================================================================

describe ("SELECTOR FOR EXPENSES", () =>  {

    test('should filter by text value', () =>  {
        const L_filters = {
            text: 'e',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        };
        const result = MP_getVisibleExpenses(MP_FXT_expenses, L_filters);

        expect(result).toEqual ( [MP_FXT_expenses[2], MP_FXT_expenses[1]]);
    } );

    test ('should filter by startDate', () =>  {
        const L_filters = {
            text: '',
            sortBy: 'date',
            startDate: moment(0),
            endDate: undefined
        }
        const L_result = MP_getVisibleExpenses (MP_FXT_expenses, L_filters);
        expect(L_result).toEqual([ MP_FXT_expenses[2], MP_FXT_expenses[0] ]);
    } );

    test ('should filter by endDate', () =>  {
        const L_filters = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: moment(0).add(2, 'days')
        }
        const L_result = MP_getVisibleExpenses (MP_FXT_expenses, L_filters);
        expect(L_result).toEqual([ MP_FXT_expenses[0], MP_FXT_expenses[1] ]);
    } );

    test ('should sort by date', () =>  {
        const L_filters = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        }
        const L_result = MP_getVisibleExpenses (MP_FXT_expenses, L_filters);
        expect(L_result).toEqual ( [ MP_FXT_expenses[2],
                                     MP_FXT_expenses[0],
                                     MP_FXT_expenses[1] ] );
    } );

    test ('should sort by amount', () =>  {
        const L_filters = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        }
        const L_result = MP_getVisibleExpenses (MP_FXT_expenses, L_filters);
        expect(L_result).toEqual ( [ MP_FXT_expenses[1],
                                     MP_FXT_expenses[2],
                                     MP_FXT_expenses[0] ] );
    } );

});
