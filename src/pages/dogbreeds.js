import React, { useState } from "react";
import axios from "axios";

export default function Dogbreeds() {
  let [dogbreed, setDogbreed] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You are searching for ${dogbreed}`);

    //https://docs.apiverve.com/api/dogbreeds

    let apiKey = "74a290c3-9db8-4d82-80a6-14cf81faf808";
    let apiUrl = "https://api.apiverve.com/v1/dogbreeds?breed=beagle";

    axios
      .get(apiUrl, {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(handleResponse);
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
