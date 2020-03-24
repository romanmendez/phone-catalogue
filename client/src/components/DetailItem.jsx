import React from "react";

const DetailItem = ({ name, data }) => {
  return (
    <tr>
      <td style={{ width: "10%" }}>
        <b>{name}</b>
      </td>
      <td>{data}</td>
    </tr>
  );
};

export default DetailItem;
