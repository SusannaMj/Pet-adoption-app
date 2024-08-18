import "../Home.css";
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
      <header className="hero">
        <div className="hero-textbox">
          <h1>Ready to adopt?</h1>
          <p>
            Browse available dogs looking for a fur-ever home <br />
            Your new best friend is waiting to meet you!
          </p>

          <button onClick={showPups}>Let's go</button>
        </div>
      </header>
      <div className="main">
        <h2>
          Curious what <span className="pink">dogbreed</span>{" "}
          <span className="green">might match</span> with you?
        </h2>
        <p className="grey">
          Try our dogbreed library to see if you will be a good match!
        </p>
        <button onClick={navigateToDogbreeds} className="navigateToDogbreeds">
          Find my match
        </button>
      </div>
    </div>
  );
}
