
/*

  sec011a_L099_ACTN_filters.jsx

 */


export const MP_filter_and_sort_actions =
{
  ACT_FS_SET_TEXT_FILTER:  'SET_TEXT_FILTER',
  ACT_FS_SORT_BY_DATE:     'SORT_BY_DATE',
  ACT_FS_SORT_BY_AMOUNT:   'SORT_BY_AMOUNT',
  ACT_FS_SET_START_DATE:   'SET_START_DATE',
  ACT_FS_SET_END_DATE:     'SET_END_DATE'
};

export const MP_setTextFilter = (text = '') => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
    text
}
       )

export const MP_sortByDate = () => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE
}  );

export const MP_sortByAmount = () => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT
}  );

export const MP_setStartDate = (startDate) => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE,
    startDate
}  );

export const MP_setEndDate = (endDate) => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE,
    endDate
}  );
