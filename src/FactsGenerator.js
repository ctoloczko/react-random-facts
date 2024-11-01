import React from "react";
import Fact from "./Fact";
import "./App.css";

export default function FactsGenerator() {
  return (
    <>
      <h2>
        {" "}
        Welcome to Fun Fact Frenzy! Tap to discover surprising facts you’ll want
        to share!{" "}
      </h2>
      <button>Hit Me with a Fact!</button>

      <Fact />
    </>
  );
}
