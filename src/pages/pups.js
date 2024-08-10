import React, { useState } from "react";
import Profile from "../Profile";
import axios from "axios";

export default function Pups() {
  let [age, setAge] = useState("");
  let [breed, setBreed] = useState("");
  let [dogSearchResult, setDogSearchResult] = useState("");

  function handleApiResponse(response) {
    console.log(response.data.message);
    alert(`you are searching for a ${age} year old ${breed}`);
    setDogSearchResult(response.data.message);
  }

  function updateBreed(event) {
    event.preventDefault();
    setBreed(event.target.value);
  }

  function updateAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  }

  function updateSearchInformation(event) {
    event.preventDefault();
    //let apiKey = "";
    let apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div>
      <h1>Meet the pups!</h1>
      <form onSubmit={updateSearchInformation}>
        <input type="number" onChange={updateAge} min="1" id="dogAge" />
        <input type="text" onChange={updateBreed} id="dogBreed" />
        <input type="submit" value="search" id="dogSearchSubmitButtun" />
      </form>
      <Profile results={dogSearchResult} />
    </div>
  );
}
