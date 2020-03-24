import React from "react";

const DetailCard = ({ selected }) => {
  console.log("DETAIL CARD", selected);
  return (
    <>
      <h1>
        {selected.manufacturer} {selected.name}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Color</td>
            <td>{selected.color}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Price</td>
            <td>{selected.price}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Screen</td>
            <td>{selected.screen}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Processor</td>
            <td>{selected.processor}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Ram</td>
            <td>{selected.ram}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DetailCard;
