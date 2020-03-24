import React from "react";
import DetailItem from "./DetailItem";

const DetailCard = ({ selected }) => {
  return (
    <>
      <h1>
        {selected.manufacturer} {selected.name}
      </h1>
      <table className="table">
        <tbody>
          <DetailItem name="Color" data={selected.color} />
          <DetailItem name="Price" data={selected.price} />
          <DetailItem name="Screen" data={selected.screen} />
          <DetailItem name="Processor" data={selected.processor} />
          <DetailItem name="Ram" data={selected.ram} />
          <DetailItem name="Description" data={selected.description} />
        </tbody>
      </table>
    </>
  );
};

export default DetailCard;
