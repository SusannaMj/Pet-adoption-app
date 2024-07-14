import React, { useState } from "react";
import axios from "axios";

export default function Dogbreeds() {
  let [dogbreed, setDogbreed] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You are searching for ${dogbreed}`);
  }

  function updateDogbreed(event) {
    event.preventDefault();
    setDogbreed(event.target.value);
  }
  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What breed are you interested in?"
          onChange={updateDogbreed}
        />
        <input type="submit" value="Search" />
      </form>
      <h1>See an overview of dogbreeds below</h1>
    </div>
  );
}
