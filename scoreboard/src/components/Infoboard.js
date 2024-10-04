import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

export default function Infoboard() {
  const { score } = useContext(ScoreContext);
  return (
    <div>
      {score > 100 ? <h3>"Good Job!"</h3> : <h3>"Let's make it over 100!"</h3>}
    </div>
  );
}
