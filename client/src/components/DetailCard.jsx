import React from "react";
import DetailItem from "./DetailItem";
import { Table } from "../styles/Styles";

const DetailCard = ({ selected }) => {
  return (
    <>
      <h2>
        {selected.manufacturer} {selected.name}
      </h2>
      <Table>
        <tbody>
          <DetailItem name="Color" data={selected.color} />
          <DetailItem name="Price" data={selected.price} />
          <DetailItem name="Screen" data={selected.screen} />
          <DetailItem name="Processor" data={selected.processor} />
          <DetailItem name="Ram" data={selected.ram} />
          <DetailItem name="Description" data={selected.description} />
        </tbody>
      </Table>
    </>
  );
};

export default DetailCard;
