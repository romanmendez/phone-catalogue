import React from "react";
import { phones } from "../api/phones.api";

const Main = () => {
  return <div>{phones().then(e => console.log(e))} Test</div>;
};

export default Main;
