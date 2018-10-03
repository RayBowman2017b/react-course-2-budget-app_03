
/*

sec011a_L102_expense_list_item.jsx

*/

import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const out = (P_id) => console.log (P_id);


const GC_link_with_children = (P_props) =>
(
  <div>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.children}
    </NavLink>
  </div>
);
export const SFC_expense_list_item = ({ id, description, amount, createdAt }) => (
    <div>
      <GC_link_with_children route={"/edit/" + id}>
          <h3>{`TO > ${description}`}</h3>
      </GC_link_with_children>
      <p> {amount} - {createdAt}</p>
    </div>
);

export default SFC_expense_list_item;
