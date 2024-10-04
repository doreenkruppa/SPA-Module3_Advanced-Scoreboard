import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

export default function Scoreboard() {
  const { score, plusScore, minusScore } = useContext(ScoreContext);
  return (
    <div>
      <h1>Scoreboard</h1>
      <h2>
        Your current score is: <span>{score}</span>
      </h2>
      <button onClick={() => plusScore()}>+</button>
      <button onClick={() => minusScore()}>-</button>
    </div>
  );
}
