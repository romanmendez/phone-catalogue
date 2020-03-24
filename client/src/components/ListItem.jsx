import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ phone, setSelected }) => {
  return (
    <NavLink activeClassName="bg-light" to={phone.name} className="list-group-item list-group-item-action" onClick={e => setSelected(phone)}>
      {phone.manufacturer} {phone.name}
    </NavLink>
  );
};

export default ListItem;
