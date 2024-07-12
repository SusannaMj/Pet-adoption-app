import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function showPups() {
    navigate("/pups");
  }

  function navigateToDogbreeds() {
    navigate("/dogbreeds");
  }
  return (
    <div>
      <hero>
        <h1>Ready to meet your new best friend?</h1>
        <button onClick={showPups}>Let's go!</button>
      </hero>
      <h2>
        Curious what dogbreed might match with you? Try our dogbreed-match-maker
      </h2>
      <button onClick={navigateToDogbreeds}>Find my match</button>
    </div>
  );
}
