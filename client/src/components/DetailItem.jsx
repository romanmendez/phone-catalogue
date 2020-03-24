import React from "react";

const DetailItem = ({ name, data }) => {
  return (
    <tr>
      <td style={{ width: "30%" }}>{name}</td>
      <td>{data}</td>
    </tr>
  );
};

export default DetailItem;
