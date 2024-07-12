import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function showPups() {
    navigate("/pups");
  }
  return (
    <div>
      <h1>Ready to meet your new best friend?</h1>
      <button onClick={showPups}>Let's go!</button>
    </div>
  );
}
