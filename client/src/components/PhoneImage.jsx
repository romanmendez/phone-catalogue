import React from "react";

const PhoneImage = ({ selected }) => {
  return <img src={selected.imageUrl} alt={`${selected.manufacturer} ${selected.name} image`} style={{ maxWidth: "200px" }} />;
};

export default PhoneImage;
