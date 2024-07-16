import React, { useState } from "react";
import axios from "axios";
import Results from "../Results";

export default function Dogbreeds() {
  let [dogbreed, setDogbreed] = useState("");
  let [dogbreedResults, setDogbreedResults] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setDogbreedResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You are searching for ${dogbreed}`);

    //API documentation: https://documenter.getpostman.com/view/5578104/RWgqUxxh

    let apiKey =
      "live_bJQ3mdfZyoZ0AHqZOuGAIdF8JEtGerS6xGlm9ej4ltQSez0flb6zJabjEGSIILDf";
    let apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${dogbreed}&attach_image=1`;

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
      <Results results={dogbreedResults} />
    </div>
  );
}
