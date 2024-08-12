import React, { useState } from "react";
import Profile from "../Profile";
import axios from "axios";
import "../Pups.css";

export default function Pups() {
  let [dogSearchResult, setDogSearchResult] = useState("");

  function handleApiResponse(response) {
    console.log(response.data.message);

    setDogSearchResult(response.data.message);
  }

  function updateSearchInformation(event) {
    event.preventDefault();

    let apiUrl = `https://dog.ceo/api/breeds/image/random/10`;

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div>
      <h1>Meet the pups!</h1>
      <form onSubmit={updateSearchInformation}>
        <input
          type="submit"
          value="Let´s go!"
          className="dogSearchSubmitButton"
        />
      </form>
      <Profile results={dogSearchResult} />
    </div>
  );
}
