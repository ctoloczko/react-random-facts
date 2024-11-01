import React from "react";
import { Hourglass } from "react-loader-spinner";

export default function Fact() {
  return (
    <>
      <p className="Fact">Here comes the fact</p>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </>
  );
}
