import React, { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";

export default function Fact() {
  const [ready, setReady] = useState(false);
  const [fact, setFact] = useState(null);

  useEffect(() => {
    const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    axios.get(apiUrl).then(handleResponse);
  }, []);

  function handleResponse(response) {
    console.log(response.data);
    setFact(response.data.text);
    setReady(true);
  }

  if (ready) {
    return <p className="Fact">{fact}</p>;
  } else {
    return (
      <>
        <p className="Fact">Here comes the fact</p>
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          colors={["#306cce", "#72a1ed"]}
        />
      </>
    );
  }
}
