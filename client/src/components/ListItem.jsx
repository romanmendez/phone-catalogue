import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ phone, setSelected }) => {
  console.log("LIST ITEM PHONE", phone);
  return (
    <div className="active" className="list-group-item list-group-item-action" onClick={e => setSelected(phone)}>
      {phone.manufacturer} {phone.name}
    </div>
  );
};

export default ListItem;
