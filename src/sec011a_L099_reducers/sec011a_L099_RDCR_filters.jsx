
/*
  sec011a_L099_RDCR_filters.jsx

 */


import { MP_filter_and_sort_actions } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";

const moment = require ('moment');


const GC_filtersReducerDefaultState =
    {
        text: '',
        sortBy: 'date',  //  date or amount
        // startDate: undefined,
        startDate: moment().startOf('month'),
        // endDate: undefined
        endDate: moment().endOf('month')
    };

export default (P_state = GC_filtersReducerDefaultState, P_action) =>
{
    switch (P_action.type)
    {

        case MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER:
            return { ...P_state, text: P_action.text };

        case MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT:
            return { ...P_state, sortBy: 'amount' };

        case MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE:
            return { ...P_state, sortBy: 'date' };


        case MP_filter_and_sort_actions.ACT_FS_SET_START_DATE:
            return { ...P_state, startDate: P_action.startDate };

        case MP_filter_and_sort_actions.ACT_FS_SET_END_DATE:
            return { ...P_state, endDate: P_action.endDate };

        default:
            return P_state;
    }
}
