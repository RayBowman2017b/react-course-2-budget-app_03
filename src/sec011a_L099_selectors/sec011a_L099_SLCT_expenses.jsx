
/*
  sec011a_L099_SLCT_expenses.jsx

 */

const moment = require ('moment');

export default (P_expenses, { text, sortBy, startDate, endDate } ) =>
{

    return P_expenses.filter ( (P_expense) =>
        {
            const L_createdAtMoment = moment(P_expense.createdAt);
            const L_startDateMatch = startDate ? startDate.isSameOrBefore (L_createdAtMoment, 'day') : true;
            const L_endDateMatch = endDate ? endDate.isSameOrAfter (L_createdAtMoment, 'day') : true;
            const L_textMatch = typeof text !== 'string' ||
                         P_expense.description.toLowerCase ().includes (text.toLowerCase());

            return L_startDateMatch && L_endDateMatch && L_textMatch;
        }
        ).sort ( (a, b) =>
            {
                if (sortBy === 'date')
                    return a.createdAt < b.createdAt ? 1 : -1;

                if (sortBy === 'amount')
                    return a.amount < b.amount ? 1 : -1;
            } );
};
