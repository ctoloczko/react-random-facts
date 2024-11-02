import React, { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import "./App.css";

export default function FactsGenerator() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchFact() {
    setLoading(true);
    const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    axios.get(apiUrl).then((response) => {
      setFact(response.data.text);
      setLoading(false);
    });
  }

  return (
    <>
      <h2>Welcome to Fun Fact Frenzy!</h2>
      <h4>Tap to discover surprising facts you’ll want to share!</h4>
      <button onClick={fetchFact}>Hit Me with a Fact!</button>

      {loading ? (
        <div>
          <p className="Fact">Loading...</p>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <p className="Fact">{fact || "Waiting"}</p>
      )}
    </>
  );
}
