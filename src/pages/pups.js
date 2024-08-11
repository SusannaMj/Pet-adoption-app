import React, { useState } from "react";
import Profile from "../Profile";
import axios from "axios";

export default function Pups() {
  let [dogSearchResult, setDogSearchResult] = useState("");

  function handleApiResponse(response) {
    console.log(response.data.message);

    setDogSearchResult(response.data.message);
  }

  function updateSearchInformation(event) {
    event.preventDefault();
    //let apiKey = "";
    let apiUrl = `https://dog.ceo/api/breeds/image/random/20`;

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div>
      <h1>Meet the pups!</h1>

      <Profile results={dogSearchResult} />
    </div>
  );
}
