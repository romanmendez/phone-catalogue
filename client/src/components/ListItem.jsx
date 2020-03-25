import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ phone, setSelected }) => {
  return (
    <NavLink activeStyle={{ background: "#ddd", fontWeight: "700" }} to={phone.name} onClick={e => setSelected(phone)}>
      {phone.manufacturer} {phone.name}
    </NavLink>
  );
};

export default ListItem;
