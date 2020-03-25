import React from "react";
<<<<<<< HEAD
import { MainContainer } from "../styles/Components";

const Loading = () => {
  return <MainContainer>Loading...</MainContainer>;
=======

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
>>>>>>> ac53ab482c84ab9e077b8aab74d97aa1df4a2893
};

export default Loading;
